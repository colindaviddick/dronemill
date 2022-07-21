import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

class Navigation extends Component {
	render() {
		return (
			<div class='container menu'>
				<div class='nav-left'>
					<h1 class='logo'>
						<a href='/home'>
							Drone<span>Mill</span>
						</a>
					</h1>
				</div>
				<div class='nav-right'>
					<div class='link-list'>
						<NavLink
							className='nav-link'
							to='/home'
							exact
							activeClassName='nav-link-active'
						>
							Home
						</NavLink>
						<NavLink
							className='nav-link'
							to='/shop'
							exact
							activeClassName='nav-link-active'
						>
							Shop
						</NavLink>
						<NavLink
							className='nav-link'
							to='/contact'
							exact
							activeClassName='nav-link-active'
						>
							Contact
						</NavLink>
						<NavLink
							className='nav-link'
							to='/about'
							exact
							activeClassName='nav-link-active'
						>
							About
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default Navigation;
