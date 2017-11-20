import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import action creator
import { weatherSearch } from '../actions/';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			city: ''
		};
	}

	render() {
		return (
			<form className="input-group">
				<input
					value={this.state.city}
					onChange={event => {this.setState({ city: event.target.value }); console.log('onChange event', this.state.city)}}
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