import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
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
					<Route path="/about" component={About} />
					<Route path="/" component={Home} />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
