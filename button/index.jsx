import React from 'react';
import Utils from '../utils.js';
if (typeof window !== "undefined") require('./button.scss');

export default React.createClass({
    render() {
        let modifiers = Utils.modifiers('button', this.props.modifiers);
        let text = this.props.children || this.props.label || Utils.const.FALLBACK;
        return (
            <div className={modifiers}>{text}</div>
        );
    }
});
