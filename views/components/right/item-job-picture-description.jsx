import React from 'react';

class ItemJobPictureDescription extends React.Component{

    render() {
        return <div className="jobPictureDescription"><span>{this.props.description}</span></div>
    }
}

export default ItemJobPictureDescription;