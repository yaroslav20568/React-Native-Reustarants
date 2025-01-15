import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { MAPBOX_API_KEY } from '@env';
import { RootStackParamList } from '../../navigation/Stacks';
import Mapbox from '@rnmapbox/maps';
import { COLORS } from '../../constants';
import { IOrder } from '../../types';
import { useLazyGetDirectionRouteQuery } from '../../redux/RTKQuery/directionRouteApi';
import { CartModalButton } from '../../components/importComponents';
import { CartModalButtonWrapper } from '../../components/RestaurantDetail/styles';
import { getDistanceUnitMeasurement, getTimeUnitMeasurement } from '../../helpers/importHelpers';

Mapbox.setAccessToken(MAPBOX_API_KEY);

interface PropsMapScreen extends NativeStackScreenProps<RootStackParamList, 'Map'> {}

const MapScreen = ({ route }: PropsMapScreen) => {
	const { orderId, restaurantCoords } = route.params;
	const [userPosition, setUserPosition] = useState<[number, number] | null>(null);

	const [directionRouteTrigger, { directionRoute, directionRouteParams, isFetching }] = useLazyGetDirectionRouteQuery({
		selectFromResult: ({ data, isFetching }) => {
			const route = data?.routes[0];

			return {
				directionRoute: route?.geometry,
				directionRouteParams: {
					distance: route?.distance as number,
					duration: route?.duration ? Math.round(route?.duration / 60) : 0,
					price: route?.distance ? +((route?.distance / 1000) * 3).toFixed(2) : 0
				},
				isFetching
			}
		}
	});

	const updateOrder = useCallback(async (): Promise<void> => {
		const order = (await firestore().collection<IOrder>('orders').doc(orderId).get()).data() as IOrder;
		const totalPrice = +(order.price.items + directionRouteParams.price).toFixed(2);
		console.log(totalPrice);

		firestore().collection<IOrder>('orders').doc(orderId).update({
			...order,
			client: {
				...order?.client,
				address: 'San Diego'
			},
			price: {
				...order?.price,
				delivery: directionRouteParams.price
			},
			time: {
				...order?.time,
				delivery: directionRouteParams.duration
			}
		})
	}, [directionRouteParams]);

  return (
    <>
			<Mapbox.MapView 
				logoEnabled={false}
				scaleBarEnabled={false}
				attributionEnabled={false}
				surfaceView={false}
				style={{flex: 1}} 
				onPress={(e) => {
					setUserPosition(e.geometry.coordinates)
					directionRouteTrigger({ 
						restaurantCoords, 
						userCoords: {
							longitude: e.geometry.coordinates[0], 
							latitude: e.geometry.coordinates[1]
						} 
					});
				}}
			>
				<Mapbox.Camera 
					zoomLevel={17}
					centerCoordinate={[restaurantCoords.longitude, restaurantCoords.latitude]}
				/>
				<Mapbox.PointAnnotation 
					id='restaurant' 
					coordinate={[restaurantCoords.longitude, restaurantCoords.latitude]}
				>
					<View>
						<Ionicons 
							name='restaurant' 
							size={25} 
							color={COLORS.red} 
						/>
					</View>
				</Mapbox.PointAnnotation>
				{userPosition && 
					<Mapbox.PointAnnotation 
						id='user' 
						coordinate={userPosition}
					>
						<></>
					</Mapbox.PointAnnotation>}
				{directionRoute?.coordinates.length && 
					<Mapbox.ShapeSource
						id={'routeSource'}
						lineMetrics={true}
						shape={{
							properties: {},
							type: 'Feature',
							geometry: {
								type: 'LineString',
								coordinates: directionRoute.coordinates
							}
						}}
					>
						<Mapbox.LineLayer
							id="exampleLineLayer"
							style={{
								lineColor: '#000',
								lineCap: 'round',
								lineJoin: 'round',
								lineWidth: 4
							}}
						/>
					</Mapbox.ShapeSource>}
			</Mapbox.MapView>
			<View style={{position: 'absolute', width: '90%', alignSelf: 'center', top: 15, backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 10}}>
				{directionRoute?.coordinates.length ? 
					<View>
						<Text style={{color: '#000', marginBottom: 3}}>Distance: {getDistanceUnitMeasurement(directionRouteParams.distance)}</Text>
						<Text style={{color: '#000', marginBottom: 3}}>Duration: {getTimeUnitMeasurement(directionRouteParams.duration)}</Text>
						<Text style={{color: '#000'}}>The amount is charged for 1 km 3 dollars</Text>
					</View> : 
					<Text>Find and select the delivery address on the map</Text>
				}
			</View>
			{directionRoute?.coordinates.length && !isFetching && 
				<>
					<CartModalButtonWrapper>
						<CartModalButton 
							title='To pay' 
							totalPrice={directionRouteParams.price} 
							onCallback={updateOrder} 
						/>
					</CartModalButtonWrapper>
				</>}
		</>
  );
};

export default MapScreen;
