import React, { Component } from 'react';
import Search from './components/Search';
import Table from './components/Table';
require('./App.css');

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Awesome! Winner!',
    url: 'https://github.com/reactjs/redux',
    author: 'Bharat Rele',
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
  {
    title: 'Mom Makes Me happy',
    url: 'https://github.com/reactjs/redux',
    author: 'Aparna Pai Rele',
    num_comments: 2,
    points: 5,
    objectID: 4,
  },
  {
    title: 'Party House',
    url: 'https://github.com/reactjs/redux',
    author: 'Akshata Pai',
    num_comments: 2,
    points: 5,
    objectID: 5,
  },
  {
    title: 'Rele Baby',
    url: 'https://github.com/reactjs/redux',
    author: 'Ayaan Rele ',
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
          <div className="interactions">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
         Search
        />
        </div>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}
export default App;
