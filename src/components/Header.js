import React from 'react'

class Header extends React.Component{
    render() {
        return (
        <header id="header">
<div id="top-bar">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">						
                <ul id="top-buttons">
                    <li><a href="#"><i class="fa fa-sign-in"></i> Login</a></li>
                    <li><a href="#"><i class="fa fa-pencil-square-o"></i> Register</a></li>
                    <li class="divider"></li>
                    <li>
                        <div class="language-switcher">
                            <span><i class="fa fa-globe"></i> English</span>
                            <ul>
                                <li><a href="#">Deutsch</a></li>
                                <li><a href="#">Espa&ntilde;ol</a></li>
                                <li><a href="#">Fran&ccedil;ais</a></li>
                                <li><a href="#">Portugu&ecirc;s</a></li>
                            </ul>
                        </div>
                    </li>
                    

                    <li>
								<form id="site-search">
									<span><i class="fa fa-search"></i></span>
									<input type="text" name="q" placeholder="Search"></input>
								</form>	
								</li> 
                </ul>
            </div>
        </div>
    </div>
</div>

        </header>
)
}
}


export default Header;