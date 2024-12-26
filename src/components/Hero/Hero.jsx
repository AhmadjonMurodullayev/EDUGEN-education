/** @format */

export default function Hero() {
	return (
		<div
			id='banner'
			className='banner-warp-area position-relative z-1'
			bis_skin_checked={1}>
			<div
				className='banner-warp-info mx-auto'
				bis_skin_checked={1}>
				<div
					className='container'
					bis_skin_checked={1}>
					<div
						className='row align-items-center'
						bis_skin_checked={1}>
						<div
							className='col-lg-6'
							bis_skin_checked={1}>
							<div
								className='banner-content style-2'
								data-cue='slideInUp'
								bis_skin_checked={1}
								data-show='true'
								style={{
									animationName: "slideInUp",
									animationDuration: "600ms",
									animationTimingFunction: "ease",
									animationDelay: "0ms",
									animationDirection: "normal",
									animationFillMode: "both",
								}}>
								<div
									className='title'
									bis_skin_checked={1}>
									<span className='sub-title d-inline-block'>Online Education Website</span>
									<h2>
										Empower Your Future, Learn Digital
										<span className='position-relative'>
											Skills
											<img
												src='https://demo.themeies.com/edugen-html/assets/images/shapes/title-shape.svg'
												alt='shape'
											/>
										</span>
									</h2>
									<p>
										Embark on a Journey of Digital Discovery: Expert-Led Courses Designed to Equip
									</p>
								</div>
								<div
									className='button-list d-flex align-items-center'
									bis_skin_checked={1}>
									<a
										href='about.html'
										className='default-btn style-2'
										bis_skin_checked={1}>
										<img
											src='https://demo.themeies.com/edugen-html/assets/images/icon/left-bold-black.svg'
											alt='icon'
										/>
										Enroll Now
									</a>
									<a
										className='play-button style-2'
										data-fslightbox='gallery'
										href='https://www.youtube.com/watch?v=3nQNiWdeH2Q'
										target='_blank'
										>
										<i className='ri-play-fill' />
                                        {/* <i className="ri-play-circle-fill"></i> */}
									</a>
								</div>
							</div>
						</div>
						<div
							className='col-lg-6'
							bis_skin_checked={1}>
							<div
								className='banner-warp-image position-relative z-1'
								data-cue='slideInUp'
								bis_skin_checked={1}
								data-show='true'
								style={{
									animationName: "slideInUp",
									animationDuration: "600ms",
									animationTimingFunction: "ease",
									animationDelay: "0ms",
									animationDirection: "normal",
									animationFillMode: "both",
								}}>
								<div
									className='user-image'
									bis_skin_checked={1}>
									<img
										src='https://demo.themeies.com/edugen-html/assets/images/banner/banner2.png'
										alt='banner-image'
									/>
								</div>
								<div
									className='bg-shape'
									bis_skin_checked={1}>
									<img
										src='https://demo.themeies.com/edugen-html/assets/images/banner/banner-warp-bg-shape.png'
										alt='banner-shape'
									/>
								</div>
								<div
									className='line-shape'
									bis_skin_checked={1}>
									<img
										src='https://demo.themeies.com/edugen-html/assets/images/banner/banner-warp-line-shape.svg'
										alt='shape'
									/>
								</div>
								<div
									className='round-shape'
									bis_skin_checked={1}>
									<img
										src='https://demo.themeies.com/edugen-html/assets/images/banner/banner-warp-line-round.png'
										alt='shape'
									/>
								</div>
								<div
									className='user-info d-flex align-items-center mx-auto'
									bis_skin_checked={1}>
									<div
										className='image'
										bis_skin_checked={1}>
										<ul className='list-unstyled ps-0 mb-0'>
											<li className='d-inline-block'>
												<img
													src='https://demo.themeies.com/edugen-html/assets/images/banner/user6.jpg'
													alt='image'
												/>
											</li>
											<li className='d-inline-block'>
												<img
													src='https://demo.themeies.com/edugen-html/assets/images/banner/user7.jpg'
													alt='image'
												/>
											</li>
											<li className='d-inline-block'>
												<img
													src='https://demo.themeies.com/edugen-html/assets/images/banner/user8.jpg'
													alt='image'
												/>
											</li>
										</ul>
									</div>
									<div
										className='content'
										bis_skin_checked={1}>
										<h3>5,000+</h3>
										<span>Happy Students</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
