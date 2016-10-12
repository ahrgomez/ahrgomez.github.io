import React from 'react';
import Pic from './pic';
import Name from './name';
import Description from './description';

class Background extends React.Component{

    constructor(props) {
        super(props);
        var imageName = "background{0}-web.jpg";
        var replaceText = "";
        switch (props.Id)
        {
            case "1":
                replaceText = "-red";
                break;
            case "2":
                replaceText = "-orange";
                break;
            case "3":
                replaceText = "-blue";
                break;
            case "4":
                replaceText = "-green";
                break;
        }
        imageName = imageName.replace("{0}", replaceText);
        this.state = { imageName: imageName };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.active !== this.props.active;
    }

    render() {
        var backgroundStyles = {
            backgroundImage: 'url(/images/' + this.state.imageName + ')',
            display: this.props.active == parseInt(this.props.Id) ? "block" : "none"
        }
        return <div className="background" style={backgroundStyles} onClick={this.props.onClick}>
            <div className="info">
                <Pic />
                <Name name="<Alejandro Hernández />" />
                <Description description="I love turning complex problems into simple," />
                <Description description="doing beautiful and useful things that people can enjoy."/>
            </div>
        </div>;
    }
}

export default Background;