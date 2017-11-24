import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityList extends Component {
	render() {
		console.log('this.props', this.props);
		return (
			<div>
				CityList
			</div>
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