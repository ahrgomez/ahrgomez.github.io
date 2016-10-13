import React from 'react';
import ItemJobDescription from './item-job-picture-description';

class ItemJobPicture extends React.Component{

    render() {
        var imageSource = "/images/" + this.props.imageName;
        return  <div>
                    <img className="jobPicture" src={imageSource} />
                    <ItemJobDescription description={this.props.companyDescription} />
                </div>
    }
}

export default ItemJobPicture;