import React from 'react';
import Chart from './Chart';


export default ({ cityData }) => {
	// more ES6 conciseness
	// if an arrow function only has a return statement you can omit the word "return"
	// this means we can condense our map function to one line as done here
	// we use an arrow function inside the .map() and the data to the right of => is what is returned to the new array
	const temperatureArray = cityData.list.map(dataSnapshot => Math.round((dataSnapshot.main.temp * 9 / 5) - 459.67));
	const pressureArray = cityData.list.map(dataSnapshot => dataSnapshot.main.pressure);
	const humidityArray = cityData.list.map(dataSnapshot => dataSnapshot.main.humidity);

	return (
		<tr>
			<td className="td-chart">{cityData.city.name}</td>
			<td className="td-chart"><Chart data={temperatureArray} color="blue" /></td>
			<td className="td-chart"><Chart data={pressureArray} color="green" /></td>
			<td className="td-chart"><Chart data={humidityArray} color="red" /></td>
		</tr>
	);
}