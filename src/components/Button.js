import React from 'react';
require('../App.css');

function Button_in(props) {
    const{ onClick, className = '', children, } = props;

    return (
            <button
                onClick = {onClick}
                className ={className}
                type="button"
            >
            {children}
            </button>
        );
    }