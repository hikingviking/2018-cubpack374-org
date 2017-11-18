import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

class Header extends Component {

	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<LinkContainer to="/">
							<a><img alt="" src="/img/wolf_gold.png" style={{height:'45px'}}/><img alt="Pack 374 Home" src="/img/pack374_2016c.png" style={{height:'39px',marginLeft:'1em'}} /></a>
						</LinkContainer>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavDropdown eventKey={1} title="About" id="basic-nav-dropdown">
							<LinkContainer to="/about">
								<MenuItem eventKey={1.1}>About Pack 374</MenuItem>
							</LinkContainer>
							<LinkContainer to="/aboutcubscouts">
								<MenuItem eventKey={1.2}>About Cub Scouting</MenuItem>
							</LinkContainer>
							<LinkContainer to="/contact">
								<MenuItem eventKey={1.3}>Pack Leadership</MenuItem>
							</LinkContainer>
							<LinkContainer to="/events">
								<MenuItem eventKey={1.4}>Pack Events</MenuItem>
							</LinkContainer>
							<LinkContainer to="/advancement">
								<MenuItem eventKey={1.5}>Scout Advancement</MenuItem>
							</LinkContainer>
							<LinkContainer to="/links">
								<MenuItem eventKey={1.6}>Links and Resources</MenuItem>
							</LinkContainer>
						</NavDropdown>
						<LinkContainer to="/volunteer">
							<NavItem eventKey={2}>Volunteer</NavItem>
						</LinkContainer>
						<LinkContainer to="/getstarted">
							<NavItem eventKey={3}>Join Us!</NavItem>
						</LinkContainer>
						<LinkContainer to="/contact">
							<NavItem eventKey={4}>Contact</NavItem>
						</LinkContainer>
						<LinkContainer to="/calendar">
							<NavItem eventKey={5}>Calendar</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
