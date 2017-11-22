import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './Components/ThemeCubScouts.css';

import About from './Pages/About';
import Home from './Pages/Home';

class App extends Component {
	render() {

	// fetch("http://local.cubpack374.org:8081")
	// 	.then(res => res.json())
	// 	.then((out) => {
	// 		console.log(out);
	// 	})
	// 	.catch(err => { throw err });

		return (
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/about" component={About} />
						<Route exact path="/" component={Home} />
						<Route component={Home} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
