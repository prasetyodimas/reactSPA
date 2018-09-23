import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class LoadingSpinner extends React.Component {
	constructor(props){
		super(props);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.state = {
			x : 0,
			y : 1,
		};
	}

	handleMouseMove(event) {
	    this.setState({
	      x: event.clientX,
	      y: event.clientY
	    });
  	}

	render() {
		return (
			<div className="wrapper-spinner">
				<i className="fa fa-spinner fa-spin spinning-fonts" /> <span className="spins">Loading...</span>
			</div>
		);
	}
}

export default LoadingSpinner;






