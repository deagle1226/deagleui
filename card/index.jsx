import React from 'react';
import Utils from '../utils.js';
if (typeof window !== "undefined") require('./card.scss');

export default React.createClass({
    render() {
        let modifiers = Utils.modifiers('card', this.props.modifiers);
        return (
            <div className={modifiers}>{this.props.children}</div>
        );
    }
});