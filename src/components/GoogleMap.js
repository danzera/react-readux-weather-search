import React, { Component } from 'react';

export default class GoogleMap extends Component {
	// componentDidMount() is "one of our lifecycle functions"
	// GETS CALLED AUTOMATICALLY AFTER THE COMPONENT HAS BEEN RENDERED TO THE SCREEN
	// This is frequently how we make 3rd party libraries work nicely with React.
	// That is, the 3rd party libraries that don't know how to work in the React ecosystem.
	// i.e. libraries that don't know what a render() method or JSX is
	componentDidMount() {
		console.log('props', this.props);
		// 'new google.maps.Map() is how we create an embedded google map inside of our document
		// this.refs.map refers to the element that we want the map inserted into
		// it also takes a configuration object that specifies map options
		new google.maps.Map(this.refs.map, {
			// map zoom level, 12 is a general city-level
			zoom: 12,
			// coordinates on where the map should be centered
			center: {
				lat: this.props.lat,
				lng: this.props.lng
			}
		});
	}

	// "The 'ref' system" in React allos us to get a direct reference
	// to an HTML element that has been rendered to the page
	// --> allows us to refer to "this.props.refName" (this.props.map in this case)
	// anywhere else within the component AFTER THE COMPONENT HAS BEEN RENDERED
	render() {
		return <div ref="map" />;
	}
}