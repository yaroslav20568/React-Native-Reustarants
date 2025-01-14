import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { MAPBOX_API_KEY } from '@env';
import { RootStackParamList } from '../../navigation/Stacks';
import Mapbox from '@rnmapbox/maps';
import { Position } from '@rnmapbox/maps/lib/typescript/src/types/Position';
import { COLORS } from '../../constants';
import { IOrder } from '../../types';

Mapbox.setAccessToken(MAPBOX_API_KEY);

interface IRouteDirection {
	geometry: {
		coordinates: Array<Position>;
		distance: number;
		duration: number;
	}
}

interface IDirection {
	routes: Array<IRouteDirection>;
}

interface PropsMapScreen extends NativeStackScreenProps<RootStackParamList, 'Map'> {}

const MapScreen = ({ route }: PropsMapScreen) => {
	const { orderId, restaurantCoords } = route.params;
	const lat = restaurantCoords.latitude;
	const lon = restaurantCoords.longitude;
	const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
	const [routes, setRoutes] = useState<Array<Position>>([]);

	useEffect(() => {
		if(userPosition) {
			setRoutes([]);

			fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${lon},${lat};${userPosition && userPosition[0]},${userPosition && userPosition[1]}?overview=full&geometries=geojson&access_token=${MAPBOX_API_KEY}`)
				.then((response) => {
					return response.json();
				})
				.then(async (data) => {
					setRoutes(data.routes[0].geometry.coordinates);
					console.log('distance: ' + data.routes[0].distance / 1000);
					console.log('duration: ' + data.routes[0].duration / 60);
					console.log('price: ' + (data.routes[0].distance / 1000) * 3);

					const order = (await firestore().collection<IOrder>('orders').doc(orderId).get()).data() as IOrder;

					firestore().collection<IOrder>('orders').doc(orderId).update({
						...order,
						client: {
							...order?.client,
							address: 'San Diego'
						},
						price: {
							...order?.price,
							delivery: (data.routes[0].distance / 1000) * 3
						},
						time: {
							...order?.time,
							delivery: data.routes[0].duration / 60
						}
					})
				})
		}
	}, [userPosition]);

  return (
    <>
			<Mapbox.MapView 
				logoEnabled={false}
				scaleBarEnabled={false}
				attributionEnabled={false}
				surfaceView={false}
				style={{flex: 1}} 
				onPress={(log) => setUserPosition(log.geometry.coordinates)}
			>
				<Mapbox.Camera 
					zoomLevel={17}
					centerCoordinate={[lon, lat]}
				/>
				<Mapbox.PointAnnotation 
					id='restaurant' 
					coordinate={[lon, lat]}
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
				{routes.length ? 
					<Mapbox.ShapeSource
						id={'routeSource'}
						lineMetrics={true}
						shape={{
							properties: {},
							type: 'Feature',
							geometry: {
								type: 'LineString',
								coordinates: routes
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
					</Mapbox.ShapeSource> : 
					''}
			</Mapbox.MapView>
		</>
  );
};

export default MapScreen;
