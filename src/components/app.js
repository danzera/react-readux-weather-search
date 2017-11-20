import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather Weather Weather</h1>
        <SearchBar />
      </div>
    );
  }
}
