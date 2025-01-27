import React from 'react';
import { View } from 'react-native';
import { IDirectionRouteGeometry, IDirectionRouteParams } from '../../../types';
import { getDistanceUnitMeasurement, getTimeUnitMeasurement } from '../../../helpers/importHelpers';
import { Container, Title, Distance, Duration } from './styles';

interface PropsMapInfo {
	directionRoute: IDirectionRouteGeometry | undefined;
	directionRouteParams: IDirectionRouteParams;
}

const MapInfo = ({ directionRoute, directionRouteParams }: PropsMapInfo) => {
	return (
		<Container>
			{directionRoute?.coordinates.length ? 
				<View>
					<Distance>Distance: {getDistanceUnitMeasurement(directionRouteParams.distance)}</Distance>
					<Duration>Duration: {getTimeUnitMeasurement(directionRouteParams.duration)}</Duration>
					<Title>The amount is charged for 1 km 3 dollars</Title>
				</View> : 
				<Title>Find and select the delivery address on the map</Title>
			}
		</Container>
	)
}

export default MapInfo;
