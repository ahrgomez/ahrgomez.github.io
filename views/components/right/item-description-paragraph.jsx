import React from 'react';

class ItemDescriptionParagraph extends React.Component{

    render() {
        var count = 0;
        return <div>{Array.from(this.props.descriptions, d=> <p key={count++}>{d}</p>)}</div>
    }
}

export default ItemDescriptionParagraph;