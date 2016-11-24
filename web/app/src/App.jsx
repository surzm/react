import React from 'react';

import './App.css';
import Menu from './components/Menu.jsx';

const DATA = require('./data.json');

const App = React.createClass({
    render() {
        return (
            <div className='App'>
                <Menu items={DATA.sitemap} />
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default App;
