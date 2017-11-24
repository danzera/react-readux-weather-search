import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import CityList from '../containers/CityList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather Weather Weather</h1>
        <SearchBar />
				<CityList />
      </div>
    );
  }
}
