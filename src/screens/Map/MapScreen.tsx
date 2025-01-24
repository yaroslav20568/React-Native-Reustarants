import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import { RootStackParamList } from '../../navigation/Stacks';
import { Point } from 'geojson';
import { ICoordinate, IDirectionRouteParams, IOrder } from '../../types';
import { useLazyGetDirectionRouteQuery } from '../../redux/RTKQuery/directionRouteApi';
import { CartModalButton, MapView, MapInfo } from '../../components/importComponents';
import { CartModalButtonWrapper } from '../../components/RestaurantDetail/CartModalButton/styles';

interface PropsMapScreen extends NativeStackScreenProps<RootStackParamList, 'Map'> {}

const MapScreen = ({ route }: PropsMapScreen) => {
	const { orderId, restaurantCoords } = route.params;
	const [userCoords, setUserCoords] = useState<ICoordinate | null>(null);

	const [directionRouteTrigger, { directionRoute, directionRouteParams, isFetching }] = useLazyGetDirectionRouteQuery({
		selectFromResult: ({ data, isFetching }) => {
			const route = data?.routes[0];

			return {
				directionRoute: route?.geometry,
				directionRouteParams: {
					distance: route?.distance as number,
					duration: route?.duration ? Math.round(route?.duration / 60) : 0,
					price: route?.distance ? +((route?.distance / 1000) * 3).toFixed(2) : 0
				} as IDirectionRouteParams,
				isFetching
			}
		}
	});

	const onSetUserCoords = (feature: GeoJSON.Feature<Point>) => {
		setUserCoords({latitude: feature.geometry.coordinates[0], longitude: feature.geometry.coordinates[1]});
		directionRouteTrigger({ 
			restaurantCoords, 
			userCoords: {
				longitude: feature.geometry.coordinates[0], 
				latitude: feature.geometry.coordinates[1]
			} 
		});
	};

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
    <View style={{flex: 1}}>
			<MapView 
				restaurantCoords={restaurantCoords}
				userCoords={userCoords}
				directionRoute={directionRoute}
				onSetUserCoords={onSetUserCoords}
			/>
			<MapInfo 
				directionRoute={directionRoute}
				directionRouteParams={directionRouteParams}
			/>
			{directionRoute?.coordinates.length && !isFetching && 
				<CartModalButtonWrapper>
					<CartModalButton 
						title='To pay' 
						totalPrice={directionRouteParams.price} 
						onCallback={updateOrder} 
					/>
				</CartModalButtonWrapper>}
		</View>
  );
};

export default MapScreen;
