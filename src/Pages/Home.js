import React, { Component } from 'react';
import CalendarPanel from '../Components/CalendarPanel';

class Home extends Component {

	render () {

		// console.log('ics url: ' + process.env.REACT_APP_ICS2JSON_URL);
        //
		// fetch("https://us-central1-b0r6-net.cloudfunctions.net/local-ics2json?filter=future&count=2&ics=http://www.scoutbook.com/ics/8524.JCQJD.ics")
		// // fetch("https://us-central1-b0r6-net.cloudfunctions.net/test-cubpack374-org-ics2json?filter=future&count=2&http://www.scoutbook.com/ics/8524.JCQJD.ics")
		// 	.then(res => res.json())
		// 	.then((out) => {
		// 		console.log(out);
		// 	})
		// 	.catch(err => { throw err });

		return (
			<div className="container">
				<div class="page-header">
					<h1>Welcome to Cub Scout Pack 374</h1>
					<p class="lead"><a href="http://www.svmbc.org">Silicon Valley Monterey Council</a>, <a href="http://svmbc.org/svmbc/districts/pioneer/">Pioneer District</a>, San Jose, CA</p>
				</div>

				<p>Since 1954, Pack 374 has been helping young boys through Cub Scouting. We are located in the Cambrian Park neighborhood of San Jose, California. We are charted by the <a href="http://www.cambrianparkumc.org/">Cambrian Park United Methodist Church</a>, but we are a non-denominational pack and have boys of many faiths. Our scouts represent many local elementary schools, including Oster, Sartorette, and Carlton.</p>

				<h3>Cub Scouting is fun! Want to learn more?</h3>

				<p><a href="/aboutcubscouts">Learn more about Cub Scouting here.</a></p>

			    <p><a href="/about">Learn more about our Pack here.</a></p>

				<p><a href="/getstarted">Interested in joining? Find out how.</a></p>

				<p><a href="/links">Already a part of the pack? Here are your shortcuts to important things.</a></p>

			    <hr />

				<CalendarPanel className="panel panel-info" count={10} filter="future" icsUrl="http://www.scoutbook.com/ics/8524.JCQJD.ics" />

				<p>Version: { process.env.REACT_APP_VERSION }</p>

			</div>
		);
	}
}

export default Home;
