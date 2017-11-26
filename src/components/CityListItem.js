import React from 'react';
import GoogleMap from './GoogleMap';
import Chart from './Chart';


export default ({ cityData }) => {
	// more ES6 conciseness
	// if an arrow function only has a return statement you can omit the word "return"
	// this means we can condense our map function to one line as done here
	// we use an arrow function inside the .map() and the data to the right of => is what is returned to the new array
	const temperatureArray = cityData.list.map(dataSnapshot => Math.round((dataSnapshot.main.temp * 9 / 5) - 459.67));
	const pressureArray = cityData.list.map(dataSnapshot => dataSnapshot.main.pressure);
	const humidityArray = cityData.list.map(dataSnapshot => dataSnapshot.main.humidity);
	// can use ES6 destructuring to pull variables out of object
	// saves us from having to write two separate variable declarations
	const { lat, lon } = cityData.city.coord;

	return (
		<tr>
			<td><GoogleMap lat={lat} lng={lon} /></td>
			<td><Chart data={temperatureArray} units="F" color="blue" /></td>
			<td><Chart data={pressureArray} units="hPa" color="green" /></td>
			<td><Chart data={humidityArray} units="%" color="red" /></td>
		</tr>
	);
}