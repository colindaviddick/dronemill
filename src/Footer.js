import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {
	render() {
		return (
			<div className=' container footer'>
				<h1>DroneMill</h1>
				<div>
					<article className='links footer-item'>
						<ul>
							<li>
								<NavLink
									className='nav-link'
									to='/home'
									exact
									activeClassName='nav-link-active'
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className='nav-link'
									to='/shop'
									exact
									activeClassName='nav-link-active'
								>
									Shop
								</NavLink>
							</li>
							<li>
								<NavLink
									className='nav-link'
									to='/contact'
									exact
									activeClassName='nav-link-active'
								>
									Contact
								</NavLink>
							</li>
							<li>
								<NavLink
									className='nav-link'
									to='/about'
									exact
									activeClassName='nav-link-active'
								>
									About
								</NavLink>
							</li>
						</ul>
					</article>
					<article className='footer-item'>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
							voluptatibus voluptas, minus vero eos, aspernatur molestias,
							exercitationem dolore itaque ab et nisi consequuntur repudiandae a
							nobis quidem!
						</h4>
					</article>
					<article className='footer-item'>
						<address>
							<span>
								42 Wallaby Way
								<br />
								Sydney
								<br />
								Australia
							</span>
						</address>
					</article>
				</div>
				<p className="copyright">© Colin Dick 2022</p>
			</div>
		);
	}
}

export default Footer;
