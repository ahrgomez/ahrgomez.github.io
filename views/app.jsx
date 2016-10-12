import Left from './components/left'
import Right from './components/right'

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return  <div>
                    <Left/>
                    <Right/>
                </div>
    }
}

ReactDOM.render(<App />, document.getElementById("container"));