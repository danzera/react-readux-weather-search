import React, { Component } from 'react';

export default class GoogleMap extends Component {

	render() {
		return (
			<div>
				GoogleMap
				<div>{this.props.cityData.city.name}</div>
			</div>
		);
	}
}