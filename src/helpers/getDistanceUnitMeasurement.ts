const getDistanceUnitMeasurement = (distance: number) => {
	if(distance < 1000) {
		return Math.round(distance) + ' m';
	} else {
		return Math.round(distance / 1000) + ' km';
	}
};

export default getDistanceUnitMeasurement;
