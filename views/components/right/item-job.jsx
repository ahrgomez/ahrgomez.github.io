import React from 'react';
import ItemJobPicture from './item-job-picture';

class ItemJob extends React.Component{

    render() {
        return  <div className="row job">
                    <div className="col-md-4 jobLeft">
                        <ItemJobPicture imageName={this.props.imageName}
                                        companyDescription={this.props.companyDescription} />
                    </div>
                    <div className="col-md-8 jobRight"></div>
                </div>
    }
}

export default ItemJob;