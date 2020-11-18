import React from 'react';

//Array of string errors
function Errors(props){
    return props.errors.map(error => <small key={error} className="form-text text-danger">{error}</small>)
}

export default Errors;