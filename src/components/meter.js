import React, {Component} from 'react';

class Meter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {color, size, progress} = this.props;
		const fillHeight = size * (progress * 0.01);

		const circleStyle = {
			position: 'relative',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, 0)',
			backgroundColor: 'transparent',
			width: `${size}px`,
			height: `${size}px`,
			border: '1px solid',
			borderColor: color,
			borderRadius: '50%'
		};

		const fillStyle = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, 0)',
			width: '100%',
			height: `${fillHeight}px`,
			backgroundColor: color
			// borderRadius: '50%'
		};

		const completeStyle = {
			position: 'absolute',
			top: '100%',
			left: '50%',
			transform: 'translate(-50%, 0)'
		};

		const textStyle = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)'
		};

		let complete = null;

		if (this.props.progress === 100) {
			complete = (
				<p className="completeMessage" style={completeStyle}>
					{this.props.completeMsg}
				</p>
			);
		}

		return (
			<div className="container" style={{position: 'relative'}}>
				<div className="circle" style={circleStyle}>
					<span className="innerFill" style={fillStyle} />
					<div className="percentage" style={textStyle}>
						{this.props.progress}
					</div>
					{complete}
				</div>
			</div>
		);
	}
}

export default Meter;
