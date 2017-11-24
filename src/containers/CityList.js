import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityListItem from '../components/CityListItem';

class CityList extends Component {
	renderList() {
		return this.props.weatherData.map((cityData, index, weatherData) => {
			return <CityListItem
								key={cityData.city.name}
								cityData={cityData} />;
		});
	}

	render() {
		console.log('this.props', this.props);
		const cityListItems = this.renderList();
		console.log('cityListItems', cityListItems);

		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
					{cityListItems}
				</tbody>
			</table>
		);
	}
};

/**
 * reminder, this function is used, along with the connect function, to give our component access to the application state from Redux
 * @param {Object} state - object corresponding to the current appliction state from Redux
 * @returns {Object} - contains key-value pairs of application state data that we want to make available to our component as this.props.keyName
 */
function mapStateToProps(state) {
	return { weatherData: state.weatherData };
}

export default connect(mapStateToProps)(CityList);