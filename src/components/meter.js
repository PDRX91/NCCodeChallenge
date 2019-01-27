import React, {Component} from 'react';

class Meter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {color, size, progress} = this.props;
		const inverseFillHeight = (100 - progress) * 0.01 * size;
		console.log('inverse fill height: ' + inverseFillHeight);

		const circleStyle = {
			position: 'relative',
			margin: '0 auto',
			backgroundColor: 'transparent',
			width: `${size}px`,
			height: `${size}px`,
			border: '1px solid',
			borderColor: `${color}`,
			borderRadius: '50%'
		};

		const svgStyle = {
			width: '100%',
			height: '100%',
			position: 'absolute',
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
					<svg style={svgStyle}>
						<defs>
							<clipPath id="cut-off-bottom">
								<rect
									x="0"
									y={inverseFillHeight}
									width={size}
									height={size}
								/>
							</clipPath>
						</defs>
						<circle
							cx={halfSize}
							cy={halfSize}
							r={halfSize}
							fill={color}
							clipPath="url(#cut-off-bottom)"
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
