import React, { useEffect, useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Mapbox from '@rnmapbox/maps';
import { Point } from 'geojson';
import { MAPBOX_API_KEY } from '@env';
import { ICoordinate, IDirectionRouteGeometry } from '../../../types';
import { COLORS } from '../../../constants';
import { CameraRef } from '@rnmapbox/maps/lib/typescript/src/components/Camera';

Mapbox.setAccessToken(MAPBOX_API_KEY);

interface PropsMapView {
	restaurantCoords: ICoordinate;
	userCoords: ICoordinate | null;
	directionRoute: IDirectionRouteGeometry | undefined;
	onSetUserCoords: (feature: GeoJSON.Feature<Point>) => void;
}

const MapView = ({ restaurantCoords, userCoords, directionRoute, onSetUserCoords }: PropsMapView) => {
	const ref = useRef<CameraRef>(null);

	useEffect(() => {
		if(directionRoute?.coordinates.length) {
			ref.current?.fitBounds(directionRoute.coordinates[0], directionRoute.coordinates[directionRoute.coordinates.length - 1], [100, 100], 1000);
		}
	}, [directionRoute]);

	return (
		<Mapbox.MapView 
			logoEnabled={false}
			scaleBarEnabled={false}
			attributionEnabled={false}
			surfaceView={false}
			style={{flex: 1}} 
			onPress={(feature) => {
				const newFeature = feature as GeoJSON.Feature<Point>;
				onSetUserCoords(newFeature);
			}}
		>
			<Mapbox.Camera 
				zoomLevel={17}
				centerCoordinate={[restaurantCoords.longitude, restaurantCoords.latitude]}
				ref={ref}
			/>
			<Mapbox.PointAnnotation 
				id='restaurant' 
				coordinate={[restaurantCoords.longitude, restaurantCoords.latitude]}
			>
				<Ionicons 
					name='restaurant' 
					size={25} 
					color={COLORS.red} 
				/>
			</Mapbox.PointAnnotation>
			{userCoords && 
				<Mapbox.PointAnnotation 
					id='user' 
					coordinate={[userCoords.latitude, userCoords.longitude]}
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
						id='exampleLineLayer'
						style={{
							lineColor: '#000',
							lineCap: 'round',
							lineJoin: 'round',
							lineWidth: 4
						}}
					/>
				</Mapbox.ShapeSource>}
		</Mapbox.MapView>
	)
}

export default MapView;
