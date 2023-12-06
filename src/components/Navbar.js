import React from 'react'
import {Link} from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return (
<div id="nav-section">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<a class="nav-logo"><img src="images/logo.png" alt="One Ring Rentals" /></a>
			
							<div id="sb-search" class="sb-search">
								<form>
									<input class="sb-search-input" placeholder="Search..." type="text" value="" name="search" id="search"></input>
									<input class="sb-search-submit" type="submit" value=""></input>
									<i class="fa fa-search sb-icon-search"></i>
								</form>
							</div>
						
							<nav class="navbar">
								<button id="nav-mobile-btn"><i class="fa fa-bars"></i></button>
								
								<ul class="nav navbar-nav">
									<li><a href="#">Find a Rental</a></li>
									<li><a href="#">List your rental</a></li>
									<li><a href="#">Regions</a></li>
									<li><a href="#">Travel Guides</a></li>
									<li><a href="#">About Us</a></li>
									<li>
										<Link to="/Regions" activeClassName="active">Regions</Link>
									</li>
								</ul>
							
							</nav>
						
							
						</div>
					</div>
				</div>
			</div>
        )
    }
}


export default Navbar;