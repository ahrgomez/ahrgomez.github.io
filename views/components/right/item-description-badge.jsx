import React from 'react';

class ItemDescriptionBadge extends React.Component{

    render() {
        var returnItems = [];
        for(var i = 0; i < this.props.items.length; i++)
        {
            var item = this.props.items[i];
            var returnItem = [];
            var titleKey = "title_" + i;
            returnItem.push(<h4 key={titleKey}>{item.title}</h4>);

            for(var j = 0; j < item.badges.length; j++)
            {
                var badgeKey = "badge_" + i + "_" + j;
                returnItem.push(<span className="badge" key={badgeKey}>{item.badges[j]}</span>);
            }

            var sectionKey = "badgesSection_" + i;
            returnItems.push(<div key={sectionKey}>{returnItem}</div>);
        }

        return <div>{returnItems}</div>;
    }
}


export default ItemDescriptionBadge;