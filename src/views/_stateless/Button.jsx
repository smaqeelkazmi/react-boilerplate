import React from 'react';

const style = {
    backgroundColor: 'darkblue',
    color: 'white',
    border: 'none',
    padding: '30px 20px',
    fontFamily: 'sans-serif',
    fontSize: '18px',
    textTransform: 'uppercase'
};

const Button = (props) => {
    return (
        <button {...props} style={style}>
            {props.children}
        </button>
    );
};

export default Button;