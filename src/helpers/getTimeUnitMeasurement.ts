const getTimeUnitMeasurement = (distance: number) => {
	if(distance < 60) {
		return Math.round(distance) + ' min';
	} else {
		return Math.round(distance / 60) + ' h';
	}
};

export default getTimeUnitMeasurement;
