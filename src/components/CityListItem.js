import React from 'react';
import Sparklines from 'react-sparklines';

export default ({ cityData }) => {
	console.log('cityData received', cityData);
	const temperatureArray = getTemperatureArray(cityData);
	console.log('temp array', temperatureArray);

	return (
		<tr>
			<td>{cityData.city.name}</td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	);
}

function getTemperatureArray(cityData) {
	return cityData.list.map((dataSnapshot, index, cityData) => {
		return (dataSnapshot.main.temp * 9 / 5) - 459.67;
	});
}