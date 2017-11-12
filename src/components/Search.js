import React from 'react';

function Search_in(props) {
    const { value, onChange, onSubmit , children } = props; // ES6 Destructuring
    return (
      <form onSubmit = { onSubmit }>
       {children}<input
          type="text"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          {children}
        </button>
      </form>
    );
  }