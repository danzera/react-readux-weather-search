import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
			<td>
				<Sparklines data={temperatureArray} height={120} width={180}>
					<SparklinesLine color="blue" />
				</Sparklines>
			</td>
			<td>
				<Sparklines data={pressureArray} height={120} width={180}>
					<SparklinesLine color="green" />
				</Sparklines>
			</td>
			<td>
				<Sparklines data={humidityArray} height={120} width={180}>
					<SparklinesLine color="red" />
				</Sparklines>
			</td>
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