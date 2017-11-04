import React from 'react';
import Button from './Button';

function Table (props) {
    //functional stateless component
    const { list, pattern, onDismiss } = props;
    
    const isSearched = (searchTerm) => (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      <div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>
              Dismiss
              </Button>
            </span>
          </div>
        )}
      </div>
    );
  }
  export default Table;