import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import action creator
import { weatherSearch } from '../actions/';

class SearchBar extends Component {
	render() {
		return (
			<form className="input-group">
				<input placeholder="Search for a city" />
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">Search</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ weatherSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);