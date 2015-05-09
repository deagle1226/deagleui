import React from 'react';
import Utils from '../utils.js';
if (typeof window !== "undefined") require('./drawer.scss');

export default React.createClass({
	getInitialState() {
		return {
			out: window.width >= 1280
		};
	},
	toggleDrawer() {
		this.setState({
			out: !this.state.out
		});
	},
    render() {
        let modifiers = Utils.modifiers('drawer', this.props.modifiers);
        let out = this.state.out ? ' drawer-out' : '';
        return (
            <aside className={modifiers + out}>
            	<NavIcon onClick={this.toggleDrawer} />
            	{this.props.children}
        	</aside>
        );
    }
});


let NavIcon = React.createClass({
    render() {
    	let { modifiers, ...rest } = this.props;
        modifiers = Utils.modifiers('navicon', modifiers);
        return (
        	<div className={modifiers} {...rest}>
        		<div className="navicon_inner" />
        	</div>
        );
    }
});
