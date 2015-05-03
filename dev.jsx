import 'normalize.css';
import './dev.scss';
import React from 'react';

import Card from 'card';

let App = React.createClass({
    render() {
        return (
            <main>
                <h1>deagle.ui</h1>
                <Card modifiers="afro" />
            </main>
        );
    }
});

React.render(<App/>, document.getElementById('anchor'))