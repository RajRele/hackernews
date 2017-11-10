import React, { Component } from 'react';
import Search from './components/Search';
import Table from './components/Table';
require('./App.css');

const DEFAULT_QUERY = 'angular';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

class App extends Component {
  
    constructor(props) {
        super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.setSearchTopstories = this.setSearchTopstories.bind(this);
    this.fetchSearchTopstories = this.fetchSearchTopstories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  setSearchTopstories(result){
      this.setState({ result });
  }

  fetchSearchTopstories(searchTerm){
       fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
       .then(response => response.json())
       .then(result => this.setSearchTopstories(result))
       .catch(e => e);
  }

  componentDidMount(){
      const{ searchTerm } = this.state;
      this.fetchSearchTopstories(searchTerm);
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
    const { searchTerm, result } = this.state;
 
    if(!result) { return null; }

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
          list={result.hits}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}
export default App;
