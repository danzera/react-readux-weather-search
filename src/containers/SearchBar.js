import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import action creator
import { weatherSearch } from '../actions/';

class SearchBar extends Component {
	/**
	 * we declare a constructor function in this case b/c we want our component to have its own internal state
	 * the internal state of the component is separate from the application state that is tracked by Redux
	 * we need to utilize internal component state to keep track of the value of our input field prior to dispatching the action creator
	 * @param {Object} props 
	 */
	constructor(props) {
		super(props);

		this.state = {
			city: ''
		};

		// need to bind the context of "this" to our callback function, lest we get the following error:
		// "Uncaught TypeError: Cannot read property 'setState' of undefined"
		// would get this error whenever the function is called, on a change to our <input /> in this case
		// this is due to the fact that we are passing a callback function to be used by the event handler as opposed to using a fat arrow function
		// generally, WHENEVER we hand a callback function off and the callback function references "this"
		// MUST BIND the context of "this", as is done here
		// "this" is our instance of the SearchBar class
		// we are overriding the original onInputChange method defined below, essentially
		// we're saying take "this.onInputChange" (the original method below)
		// and bind the function to "this", which is our SearchBar instance
		// then replace 'onInputChange' with this new, bound instance of the original function
		this.onInputChange = this.onInputChange.bind(this);
	}

	/**
	 * this function is passed to our <input /> field below as a callback function
	 * is used to set our internal component state (again, not Redux application state)
	 * see notes above regarding binding the context of "this"
	 * @param {Object} event 
	 */
	onInputChange(event) {
		this.setState({ city: event.target.value });
	}
	
	/**
	 * used to prevent the browser from trying to submit the HTML form -- the default browser behavior on submit
	 * and instead, send an API request to retrieve weather data
	 * @param {Object} event 
	 */
	onFormSubmit(event) {
		// default browser behavior calls for a POST request to be sent along with the form data, which would cause a page refresh
		// we don't want that to occur, so we run this event method to prevent the form submission from occuring
		// (passed as a callback function handler to the onSubmit function in the <form> element below)
		// we still want to use a <form> element b/c we get some free functionality
		// - the 'submit' button is triggered by the enter key from within any child of a <form> element
		// and the 'submit' button still triggers the form submit function when clicked
		// - would need to setup manual event handlers for both of these if not using a <form> element
		// is good to use <form> elements for handling user input, generally, for this reason
		event.preventDefault();
	}

	// value={this.state.city} in our <input /> below makes it a "controlled field"
	// "controlled field" meaning that the value of the <input /> is set by the state of our component
	// NOTE: when we refer to state here, we are referring to the internal state of the component, NOT Redux state
	// additionally, we are passing the callback function this.onInputChange to onChange here as opposed to writing an inline function
	// see notes above regarding pertinent notes about passing callback functions to be run
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					className="form-control"
					value={this.state.city}
					onChange={this.onInputChange}
					placeholder="Search for a city" />
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ weatherSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);