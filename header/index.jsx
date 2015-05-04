import React from 'react';
import Utils from '../utils.js';
if (typeof window !== "undefined") require('./header.scss');

export default React.createClass({
    render() {
        let modifiers = Utils.modifiers('header', this.props.modifiers);
        return (
            <header className={modifiers}>{this.props.children}</header>
        );
    }
});