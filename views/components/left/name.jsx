import React from 'react';

class Name extends React.Component{

    render() {
        return <h1 className="name">{this.props.name}</h1>
    }
}

export default Name;