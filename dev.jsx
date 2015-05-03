import 'normalize.css';
import './dev.scss';
import React from 'react';

import Card from 'card';
import Button from 'button';

let App = React.createClass({
    render() {
        return (
            <main>
                <h1>deagle<i>ui</i></h1>
                <Card modifiers="afro" />
                <Button />
                <Button modifiers="accent">Accent Button</Button>
                <Card modifiers="afro pillow">
                    <Button>Button</Button>
                    <Button modifiers="accent">Accent Button</Button>
                </Card>
            </main>
        );
    }
});

React.render(<App/>, document.getElementById('anchor'))
