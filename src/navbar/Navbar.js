import React from 'react'
import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton.js';

export default function Navbar(){
	return(
		<div>
			<nav className="navbar is-transparent">
				<div className="navbar-brand">
					<a href="https://bulma.io" className="navbar-item">
						<img src="https://bulma.io/images/bulma-logo.png" alt="" width="115" height="90" />
					</a>
					<div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div id="navbarExampleTransparentExample" className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item" href="https://bulma.io/">
							Home
						</a>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
								Docs
							</a>
							<div className="navbar-dropdown is-boxed">
								<a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
									Overview
								</a>
								<a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
									Modifiers
								</a>
								<a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
									Columns
								</a>
								<a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
									Layout
								</a>
								<a className="navbar-item" href="https://bulma.io/documentation/form/general/">
									Form
								</a>
								<hr className="navbar-divider" />
								<a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
									Elements
								</a>
								<a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
									Components
								</a>
							</div>
						</div>
					</div>
					<div className="navbar-end">
      			<div className="navbar-item">
        			<div className="field is-grouped">
          			<p className="control">
          			<CoolButton isSmall isDanger className="is-rounded my-class">
       						Login
      					</CoolButton>
      					<CoolButton isSmall isDanger className="is-rounded my-class">
        					Signup
								</CoolButton>
								</p>
								<p className="control">
								</p>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}