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
			margin: '0 auto',
			backgroundColor: 'transparent',
			width: `${size}px`,
			height: `${size}px`,
			border: '1px solid',
			borderColor: 'limegreen',
			borderRadius: '50%'
		};

		const fillStyle = {
			position: 'absolute',
			backgroundPosition: 'bottom',
			bottom: '0',
			left: '50%',
			transform: 'translate(-50%, 0)',
			width: '100%',
			height: `${fillHeight}px`,
			backgroundColor: color
			// borderRadius: '50%'
		};

		const svgStyle = {
			width: '100%',
			height: '100%',
			position: 'absolute',
			/* margin: 0 auto; */
			// top: '50%',
			left: '50%',
			transform: 'translate(-50%, 0)'
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
		let halfSize = this.props.size / 2;

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
					{/* <span className="innerFill" style={fillStyle} /> */}
					<svg style={svgStyle}>
						<defs>
							<clipPath id="cut-off-bottom">
								<rect
									x="0"
									y={halfSize}
									width={size}
									height={halfSize}
								/>
							</clipPath>
						</defs>
						<circle
							cx={halfSize}
							cy={halfSize}
							r={halfSize}
							fill="red"
							clip-path="url(#cut-off-bottom)"
						/>
					</svg>
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
