import BackgroundList from './left/background-list';
import React from 'react';

class Left extends React.Component {
    render() {
        return <div className="left col-md-4">
                <BackgroundList />
            </div>
    }
}

export default Left;