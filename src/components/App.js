import React, {Component} from 'react';
import '../App.css';
import Meter from './Meter';
import Form from './Form';

class App extends Component {
	constructor(props) {
		super(props);
		//setting default states
		this.state = {
			size: 200,
			color: '#00ADD0',
			progress: 50,
			completeMsg: 'Loading is complete'
		};

		this.handleChange = this.handleChange.bind(this);
	}

	//update state to reflect the value in the given input
	handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div className="App">
				<h1 className="title">Progress Meter</h1>
				<h4>Adjust the meter with the inputs</h4>
				{/* passing functions and state to the child component */}
				<Form handleChange={this.handleChange} formState={this.state} />
				<Meter
					size={this.state.size}
					color={this.state.color}
					progress={this.state.progress}
					completeMsg={this.state.completeMsg}
				/>
			</div>
		);
	}
}

export default App;
