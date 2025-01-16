import React from 'react';
import { View, Text } from 'react-native';
import { IDirectionRouteGeometry, IDirectionRouteParams } from '../../types';
import { getDistanceUnitMeasurement, getTimeUnitMeasurement } from '../../helpers/importHelpers';
import { MapInfoStyle, MapInfoText, MapInfoDistance, MapInfoDuration } from './styles';

interface PropsMapInfo {
	directionRoute: IDirectionRouteGeometry | undefined;
	directionRouteParams: IDirectionRouteParams;
}

const MapInfo = ({ directionRoute, directionRouteParams }: PropsMapInfo) => {
	return (
		<MapInfoStyle>
			{directionRoute?.coordinates.length ? 
				<View>
					<MapInfoDistance>Distance: {getDistanceUnitMeasurement(directionRouteParams.distance)}</MapInfoDistance>
					<MapInfoDuration>Duration: {getTimeUnitMeasurement(directionRouteParams.duration)}</MapInfoDuration>
					<MapInfoText>The amount is charged for 1 km 3 dollars</MapInfoText>
				</View> : 
				<MapInfoText>Find and select the delivery address on the map</MapInfoText>
			}
		</MapInfoStyle>
	)
}

export default MapInfo;
