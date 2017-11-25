import React from 'react';
import Chart from './Chart';


export default ({ cityData }) => {
	const temperatureArray = getArray(cityData.list, 'temp');
	const pressureArray = getArray(cityData.list, 'pressure');
	const humidityArray = getArray(cityData.list, 'humidity');
	console.log('cityData received', cityData);
	console.log('temp array', temperatureArray);
	console.log('pressure array', pressureArray);
	console.log('humidity array', humidityArray);

	return (
		<tr>
			<td>{cityData.city.name}</td>
			<td><Chart data={temperatureArray} color="blue" /></td>
			<td><Chart data={pressureArray} color="green" /></td>
			<td><Chart data={humidityArray} color="red" /></td>
		</tr>
	);
}

function getArray(list, dataType) {
	return list.map((dataSnapshot, index, list) => {
		if (dataType === 'temp') {
			return Math.round((dataSnapshot.main[dataType] * 9 / 5) - 459.67);
		} else {
			return dataSnapshot.main[dataType];
		}	
	});
}