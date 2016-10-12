import React from 'react';

class Description extends React.Component{

    render() {
        return <h4 className="description">{this.props.description}</h4>
    }
}

export default Description;