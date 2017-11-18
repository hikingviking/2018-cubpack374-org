import React, { Component } from 'react';

class Footer extends Component {

	render() {

		return (
			<footer>
				<hr />
				<div className="container footer">

					<div className="row">
						<div className="col-sm-4">
							<p><b>Copyright &copy; 2011-2018 Cub Scout Pack 374</b></p>
							<p>All rights reserved.</p>
						</div>
						<div className="col-sm-4">
							<p><b>The Scout Oath</b></p>
							<p>On my honor I will do my best<br />
							To do my duty to God and my country <br />
							and to obey the Scout Law; <br />
							To help other people at all times;<br />
							To keep myself physically strong, <br />
							mentally awake, and morally straight.
							</p>

						</div>
						<div className="col-sm-4">
							<p><b>The Scout Law</b></p>
							<p>A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.</p>
						</div>
					</div>

				</div>
			</footer>
		)
	}
}

export default Footer;
