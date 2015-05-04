import 'normalize.css';
import './dev.scss';
import React from 'react';
import pkg from 'package.json';

import Card from 'card';
import Button from 'button';
import Footer from 'footer';
import Header from 'header';

let App = React.createClass({
    render() {
        return (
            <main id="main">
                <Header>
                    <Logo />
                </Header>
                <Card modifiers="afro" />
                <Button />
                <Button modifiers="accent">Accent Button</Button>
                <Card modifiers="afro pillow">
                    <Button>Button</Button>
                    <Button modifiers="accent">Accent Button</Button>
                </Card>
                <Footer>
                    v{pkg.version} by {pkg.author.split('<')[0]}
                </Footer>
            </main>
        );
    }
});

let Logo = React.createClass({
    render() {
        return (
            <span className="logo">deagle<i>ui</i></span>
        );
    }
});

React.render(<App/>, document.getElementById('anchor'))
