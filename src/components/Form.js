import React, {Component} from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		//styling for the form element
		const formStyle = {
			display: 'flex',
			margin: '3% auto',
			width: '66%',
			justifyContent: 'space-between'
		};

		return (
			<div style={formStyle}>
				<div className="input-box">
					<label>
						Size <span>(px)</span>
					</label>
					<input
						name="size"
						type="text"
						value={this.props.formState.size} //get the value from the state of the parent
						onChange={this.props.handleChange} //update the state of the parent to reflect the input values
						placeholder="250"
					/>
				</div>
				<div className="input-box">
					<label>Color</label>
					<input
						name="color"
						type="text"
						value={this.props.formState.color} //get the value from the state of the parent
						onChange={this.props.handleChange} //update the state of the parent to reflect the input values
						placeholder="#00ADD0"
					/>
				</div>
				<div className="input-box">
					<label>
						Progress <span>(%)</span>
					</label>
					<input
						name="progress"
						type="text"
						value={this.props.formState.progress} //get the value from the state of the parent
						onChange={this.props.handleChange} //update the state of the parent to reflect the input values
						placeholder="0"
					/>
				</div>
				<div className="input-box">
					<label>'Complete' message</label>
					<input
						name="completeMsg"
						type="text"
						value={this.props.formState.completeMsg} //get the value from the state of the parent
						onChange={this.props.handleChange} //update the state of the parent to reflect the input values
						placeholder="Loading is Complete"
					/>
				</div>
			</div>
		);
	}
}
