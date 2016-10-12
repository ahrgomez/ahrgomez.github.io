import React from 'react';
import Background from './background';

class BackgroundList extends React.Component{

    constructor(props) {
        super(props);
        this.state = { activeIdx: 3 };
    }

    componentDidMount() {
        var context = this;
        setInterval(function() {
                context.changeActive();
            }
            , 3000);
    }

    changeActive() {
        var newActive = Math.floor((Math.random() * 5) + 1) - 1;
        if(this.state.activeIdx != newActive) {
            this.setState({
                activeIdx: newActive
            });
        }
    }

    render() {
        return <div className="backgroundList">
            <Background Id="0" active={this.state.activeIdx} />
            <Background Id="1" active={this.state.activeIdx} />
            <Background Id="2" active={this.state.activeIdx} />
            <Background Id="3" active={this.state.activeIdx} />
            <Background Id="4" active={this.state.activeIdx} />
        </div>
    }
}

export default BackgroundList;