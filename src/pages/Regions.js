import React from 'react'
import { Helmet } from "react-helmet";
import Config from "../config.json";

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "Create a React App from an HTML Website.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Regions extends React.Component{
    render() {
        return   ( <>

<Helmet>
					<title>{TITLE}</title>
					<link rel="canonical" href={CANONICAL} />
					<meta name="description" content={DESC} />
					<meta name="theme-color" content={Config.THEME_COLOR} />
				</Helmet>
				
<div class="content">
			<div class="container">
				<div class="row">
				
				
					<div class="main col-sm-8">
					
						
						
						<div class="grid-style1 clearfix">
							<div class="item col-md-12">
								<div class="image image-large">
									<a href="#">
										<span class="btn btn-default"><i class="fa fa-file-o"></i> Read More</span>
									</a>
									<img src="http://placehold.it/720x255" alt="" />
								</div>
								<div class="info-blog">
									<h3>
										<a href="#">The Northeast</a>
									</h3>
									<p>Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
								</div>
							</div>

							<div class="item col-md-12">
								<div class="image image-large">
									<a href="#">
										<span class="btn btn-default"><i class="fa fa-file-o"></i> Read More</span>
									</a>
									<img src="http://placehold.it/720x255" alt="" />
								</div>
								<div class="info-blog">
									<h3>
										<a href="#">The Northwest</a>
									</h3>
									<p>Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
								</div>
							</div>
							<div class="item col-md-12">
								<div class="image image-large">
									<a href="#">
										<span class="btn btn-default"><i class="fa fa-file-o"></i> Read More</span>
									</a>
									<img src="http://placehold.it/720x255" alt="" />
								</div>
								<div class="info-blog">
									<h3>
										<a href="#">The Southeast</a>
									</h3>
									<p>Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
								</div>
							</div>
							<div class="item col-md-12">
								<div class="image image-large">
									<a href="#">
										<span class="btn btn-default"><i class="fa fa-file-o"></i> Read More</span>
									</a>
									<img src="http://placehold.it/720x255" alt="" />
								</div>
								<div class="info-blog">
									<h3>
										<a href="#">The Southwest</a>
									</h3>
									<p>Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
								</div>
							</div>

						</div>
				
						<div class="pagination">
							<ul id="previous">
								<li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
							</ul>
							<ul>
								<li class="active"><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
							</ul>
							<ul id="next">
								<li><a href="#"><i class="fa fa-chevron-right"></i></a></li>
							</ul>
						</div>
					
						
					</div>	
		
					<div class="sidebar gray col-sm-4">
					
					
						<h2 class="section-title">Popular articles</h2>
						<ul class="latest-news">
							<li class="col-md-12">
								<div class="image">
									<a href="blog-detail.html"></a>
									<img src="http://placehold.it/100x100" alt="" />
								</div>
								
								<ul class="top-info">
									<li><i class="fa fa-calendar"></i> 30 July 2014</li>
								</ul>
									
								<h4><a href="#">It's all about the Northeast</a></h4>
							</li>
							<li class="col-md-12">
								<div class="image">
									<a href="blog-detail.html"></a>
									<img src="http://placehold.it/100x100" alt="" />
								</div>
								
								<ul class="top-info">
									<li><i class="fa fa-calendar"></i> 20 July 2014</li>
								</ul>
									
								<h4><a href="#">Southwest: Best ever</a></h4>
							</li>
							<li class="col-md-12">
								<div class="image">
									<a href="blog-detail.html"></a>
									<img src="http://placehold.it/100x100" alt="" />
								</div>
								
								<ul class="top-info">
									<li><i class="fa fa-calendar"></i> 10 July 2014</li>
								</ul>
									
								<h4><a href="#">I went to the Northwest and stole from and old lady</a></h4>
							</li>

						</ul>
					
						
					</div>
					

				</div>
			</div>
		</div>
</>
        );
    }
}

export default Regions; 