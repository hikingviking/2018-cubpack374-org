import React, { Component } from 'react';
import CalendarPanel from '../Components/CalendarPanel';
import Carousel from '../Components/Carousel';

import { FirebaseDatabase } from '../Model/Firebase.js';

class Home extends Component
{
	constructor ()
	{
		super();
		this.state = {
			homeCarouselImages:[]
		}
	}

	componentWillMount ()
	{
		let currentState = this.state;
		FirebaseDatabase.ref('/homeCarousel').once('value', snapshot =>
		{
			const thedata = snapshot.val();
			let homeCarouselImages = [];
			for (var k in thedata)
			{
				homeCarouselImages.push (thedata[k]);
			}
			currentState['homeCarouselImages'] = homeCarouselImages;
			this.setState(currentState);
		});
	}

	render ()
	{
		return (
			<div>
				<Carousel images={ this.state.homeCarouselImages} delay={ 5000 } />
				<div className="container">
					<div className="page-header">
						<h1>Welcome to Cub Scout Pack 374</h1>
						<p className="lead"><a href="http://www.svmbc.org">Silicon Valley Monterey Council</a>, <a href="http://svmbc.org/svmbc/districts/pioneer/">Pioneer District</a>, San Jose, CA</p>
					</div>

					<p>Since 1954, Pack 374 has been helping young boys through Cub Scouting. We are located in the Cambrian Park neighborhood of San Jose, California. We are charted by the <a href="http://www.cambrianparkumc.org/">Cambrian Park United Methodist Church</a>, but we are a non-denominational pack and have boys of many faiths. Our scouts represent many local elementary schools, including Oster, Sartorette, and Carlton.</p>

					<h3>Cub Scouting is fun! Want to learn more?</h3>

					<p><a href="/aboutcubscouts">Learn more about Cub Scouting here.</a></p>

				    <p><a href="/about">Learn more about our Pack here.</a></p>

					<p><a href="/getstarted">Interested in joining? Find out how.</a></p>

					<p><a href="/links">Already a part of the pack? Here are your shortcuts to important things.</a></p>

				    <hr />

					<CalendarPanel className="panel panel-info" count={10} filter="future" icsUrl="http://www.scoutbook.com/ics/8524.JCQJD.ics" />

				</div>
			</div>
		);
	}
}

export default Home;
