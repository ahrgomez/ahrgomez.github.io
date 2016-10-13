import React from 'react';
import ItemJobPicture from './item-job-picture';
import ItemJobDescription from './item-job-description'

class ItemJob extends React.Component{

    render() {
        return  <div className="row job">
                    <div className="col-lg-4 jobLeft">
                        <ItemJobPicture imageName={this.props.imageName}
                                        companyDescription={this.props.companyDescription} />
                    </div>
                    <div className="col-lg-8 jobRight">
                        <ItemJobDescription position={this.props.position} jobDescription={this.props.jobDescription} skills={this.props.skills} />
                    </div>
                </div>
    }
}

export default ItemJob;