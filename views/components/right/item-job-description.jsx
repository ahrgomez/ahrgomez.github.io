import React from 'react';
import ItemJobDescriptionSkills from './item-job-description-skills'

class ItemJobDescription extends React.Component{

    render() {
        return  <div className="jobDescription">
                    <h4>{this.props.position}</h4>
                    <p>{this.props.jobDescription}</p>
                    <ItemJobDescriptionSkills skills={this.props.skills} />
                </div>
    }
}

export default ItemJobDescription;