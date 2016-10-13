import React from 'react';
import ItemTitle from './item-title';

class Item extends React.Component{

    render() {
        var itemClass = "item";
        if(this.props.itemClass != undefined)
        {
            itemClass += " " + this.props.itemClass;
        }

        return  <div className={itemClass}>
                    <ItemTitle title={this.props.title} />
                    {this.props.children}
                </div>
    }
}

export default Item;