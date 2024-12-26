/** @format */

export default function Header() {
	return (
		<>
			<div className={"navbar-area position-relative style-2"}>
				<div className='mobile-responsive-nav'>
					<div className='container'>
						<div className='mobile-responsive-menu'>
							<div className='logo'>
								<a href='index.html'>
									<img
										src='https://demo.themeies.com/edugen-html/assets/images/black-logo.svg'
										alt='logo'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='desktop-nav'>
					<div className='container'>
						<nav className='navbar navbar-expand-md navbar-light'>
							<a
								className='navbar-brand me-0'
								href='index.html'>
								<img
									src='https://demo.themeies.com/edugen-html/assets/images/black-logo.svg'
									alt='logo'
								/>
							</a>
							<div
								className='collapse navbar-collapse mean-menu'
								id='navbarSupportedContent'
								style={{ display: "block" }}>
								<ul className='navbar-nav mx-auto'>
									<li className='nav-item'>
										<a
											href='#'
											className='dropdown-toggle nav-link active'>
											Home
										</a>
										<ul className='dropdown-menu'>
											<li className='nav-item'>
												<a
													href='index.html'
													className='nav-link'>
													Home Demo - 1
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='index-2.html'
													className='nav-link active'>
													Home Demo - 2
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='index-3.html'
													className='nav-link'>
													Home Demo - 3
												</a>
											</li>
										</ul>
									</li>
									<li className='nav-item'>
										<a
											href='#'
											className='dropdown-toggle nav-link'>
											Pages
										</a>
										<ul className='dropdown-menu'>
											<li className='nav-item'>
												<a
													href='about.html'
													className='nav-link'>
													About Us
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='team.html'
													className='nav-link'>
													Our Team
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='team-details.html'
													className='nav-link'>
													Our Team Details
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='privacy-policy.html'
													className='nav-link'>
													Privacy Policy
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='terms-conditions.html'
													className='nav-link'>
													Terms &amp; Conditions
												</a>
											</li>
										</ul>
									</li>
									<li className='nav-item'>
										<a
											href='#'
											className='dropdown-toggle nav-link'>
											Courses
										</a>
										<ul className='dropdown-menu'>
											<li className='nav-item'>
												<a
													href='courses-list.html'
													className='nav-link'>
													Courses List
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='courses-grid.html'
													className='nav-link'>
													Courses Grid
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='courses-details.html'
													className='nav-link'>
													Courses Details
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='courses-with-sidebar.html'
													className='nav-link'>
													Courses With Sidebar
												</a>
											</li>
										</ul>
									</li>
									<li className='nav-item'>
										<a
											href='#'
											className='dropdown-toggle nav-link'>
											Blog
										</a>
										<ul className='dropdown-menu'>
											<li className='nav-item'>
												<a
													href='blog-standard.html'
													className='nav-link'>
													Blog Standard
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='blog-details.html'
													className='nav-link'>
													Blog Details
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='blog-with-sidebar.html'
													className='nav-link'>
													Blog With Sidebar
												</a>
											</li>
											<li className='nav-item'>
												<a
													href='blog-without-sidebar.html'
													className='nav-link'>
													Blog Without Sidebar
												</a>
											</li>
										</ul>
									</li>
									<li className='nav-item'>
										<a
											href='contact.html'
											className='nav-link'>
											Contacts
										</a>
									</li>
								</ul>
								<div className='others-option position-relative d-flex align-items-center'>
									<div className='option-item'>
										<a
											href='courses-details.html'
											className='default-btn2'>
											Start Free Trial
											<img
												src='https://demo.themeies.com/edugen-html/assets/images/icon/left-small.svg'
												alt='icon'
											/>
										</a>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
				<div className='others-option-for-responsive'>
					<div className='container'>
						<div className='dot-menu'>
							<div className='inner'>
								<div className='circle circle-one' />
								<div className='circle circle-two' />
								<div className='circle circle-three' />
							</div>
						</div>
						<div className='container'>
							<div className='option-inner'>
								<div className='others-options justify-content-center d-flex align-items-center'>
									<div className='option-item'>
										<a
											href='#'
											className='default-btn2'>
											Start Free Trial
											<img
												src='https://demo.themeies.com/edugen-html/assets/images/icon/left-small.svg'
												alt='icon'
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
