import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<footer>
				<nav>
					<ul className="container">
						<li className="footerCopy">
							Sage Klein<br></br>NSS Cohort 35 &copy; 2019
						</li>
						<br></br>
						<div className="socialMediaIcons">
							<li id="footerSocial">
								<a
									href="https://www.linkedin.com/in/sage-klein/"
									target="_blank"
								>
									{/* <img
										id="footerIcon"
										src={require("./linkedin.png")}
										alt="LinkedIn Logo"
									/> */}
								</a>
							</li>
						</div>
					</ul>
				</nav>
			</footer>
		);
	}
}

export default Footer;
