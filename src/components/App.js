import React, {Component} from 'react';
import '../App.css';
import Meter from './meter';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="title">Progress Meter</h1>
				<Meter
					size={'150'}
					color={'blue'}
					progress={78}
					completeMsg={'Loading is complete'}
				/>
			</div>
		);
	}
}

export default App;
