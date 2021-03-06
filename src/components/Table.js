import React from 'react';
import Button from './Button';
require('../App.css');

function Table_in (props) {
    //functional stateless component
    const { list, onDismiss } = props;

    const isSearched = (searchTerm) => (item) =>
     item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return (
      <div className="table">
        {list.map(item =>
          <div key={item.objectID} className="table-row">
            <span stlye={{ width: '40%'}}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span stlye={{ width: '30%'}}>{item.author}</span>
            <span stlye={{ width: '10%'}} >{item.num_comments}</span>
            <span stlye={{ width: '10%'}}>{item.points}</span>
            <span stlye={{ width: '10%'}}>
              <Button onClick={() => onDismiss(item.objectID)}
                    className="button-inline"
              >
              Dismiss
              </Button>
            </span>
          </div>
        )}
      </div>
    );
  }