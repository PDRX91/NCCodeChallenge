import React, {Component} from 'react';

class Meter extends Component {
	render() {
		//destructuring props
		const {color, size, progress} = this.props;

		//measures the % of white space needed in the meter
		const inverseFillHeight = (100 - progress) * 0.01 * size;

		//styling for the circle element
		const circleStyle = {
			position: 'relative',
			margin: '0 auto',
			backgroundColor: 'transparent',
			width: `${size}px`,
			height: `${size}px`,
			border: '1px solid',
			borderColor: `${color}` || '#00ADD0', //fall back color in case the color is invalid
			borderRadius: '50%'
		};

		//styling for the svg element
		const svgStyle = {
			width: '100%',
			height: '100%',
			position: 'absolute',
			left: '50%',
			transform: 'translate(-50%, 0)'
		};

		//styling for the svg fill
		const fillStyle = {
			fill: `${color}` || '#00ADD0' //fall back color in case the color is invalid
		};

		//styling for the completion message
		const completeStyle = {
			position: 'absolute',
			top: '100%',
			left: '50%',
			transform: 'translate(-50%, 0)'
		};

		//styling for the progress text
		const textStyle = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)'
		};

		let complete = null;

		//for keeping proper svg proportions
		let halfSize = this.props.size / 2;

		//if progress is 100%, show the completion message
		if (this.props.progress == 100) {
			complete = (
				<p className="completeMessage" style={completeStyle}>
					{this.props.completeMsg}
				</p>
			);
		}

		return (
			<div className="container" style={{position: 'relative'}}>
				<div className="circle" style={circleStyle}>
					{/* an svg to fill the circle, intersected by a clip path to make it the appropriate height */}
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
							style={fillStyle}
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
