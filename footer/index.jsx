import React from 'react';
import Utils from '../utils.js';
if (typeof window !== "undefined") require('./footer.scss');

export default React.createClass({
    render() {
        let modifiers = Utils.modifiers('footer', this.props.modifiers);
        return (
            <footer className={modifiers}>{this.props.children}</footer>
        );
    }
});