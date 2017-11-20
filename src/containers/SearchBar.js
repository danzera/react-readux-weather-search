import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { weatherSearch } from '../actions/';

class SearchBar extends Component {
	render() {
		return (
			<div>
				<input placeholder="Search for a city" />
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ weatherSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);