import React from 'react';

class ItemJobDescriptionSkills extends React.Component{

    render() {
        var count = 0;
        return  <div>
            <h6>Skills:</h6>
            {this.props.skills.map(s => <span key={count++} className="badge">{s}</span>)}
        </div>
    }
}

export default ItemJobDescriptionSkills;