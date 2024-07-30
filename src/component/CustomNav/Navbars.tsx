"use client"
import { useContext, useEffect, useState } from "react"
import ScrollObserver, { ScrollContext } from "@/utils/Scroll-observer"


import { DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavDropdown, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";

import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import "./css/style.css"

import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

const Navbars = () => {
	const { scrollY } = useContext(ScrollContext)
	const [atTop, setAtTop] = useState<boolean>(true)

	useEffect(() => {
		console.log(scrollY, ":", scrollY > 200)
		setAtTop(scrollY < 200)
	}, [scrollY])
	return (
		<>

			<header className={`header ${!atTop && "sticky"} navbar navbar-expand-lg`}>
				<div className="header-inner ">
					<div className="container pcview">
						<div className="row">

							<div className=" col-xxl-2 col-xl-2 col-lg-2">

								<Link href="/"><div className="logo"></div></Link>

							</div><div className="col-lg-8 ">
								<Link href="/home"><button className="dropbtn btn btn-light" >หน้าหลัก</button></Link>
								<div className="dropdowns nav-drop">
									<button className="dropbtn dropdown-toggle btn btn-light"><span>เกี่ยวกับเรา</span></button>
									<div className="dropdowns-content fullwidth">
										<div className='content'>
											<ul className='con'>
												<li><h3>รู้จักเรา</h3>
													<ul>
														<li><Link href="/about">แนะนำมหาวิทยาลัย</Link></li>
														<li><Link href="/about/history">ประวัติความเป็นมา</Link></li>
														<li><Link href="/home/about/duty">อำนาจหน้าที่มหาวิทยาลัย</Link></li>
														<li><Link href="https://anv50.rbru.ac.th/" target='_blank' >50 ปี มหาวิทยาลัยราชภัฏรำไพพรรณี</Link></li>
														<li><Link href="https://council.rbru.ac.th/stru?stru=university" target='_blank' >โครงสร้างการแบ่งส่วนราชการ</Link></li>
														<li><Link href="/home/about/video" >วีดิทัศน์แนะนำ</Link></li>
														<li><Link href="https://www.rbru.ac.th/PDPA/" target='_blank' >นโยบายการคุ้มครองข้อมูลส่วนบุคคล (PDPA)</Link></li>
														<li><Link href="https://drive.google.com/file/d/13-rXhIcVDJdGxfw6DsR7INshLIJAewpi/view?usp=sharing" target='_blank' >พระราชบัญญัติมหาวิทยาลัยราชภัฏ</Link></li>
													</ul>
												</li>

												<li><h3>การบริหาร</h3>
													<ul>
														<li><Link href="/About/Executive_Committee">คณะกรรมการบริหารมหาวิทยาลัย</Link></li>
														<li><Link href="https://council.rbru.ac.th" target="_blank">สภามหาวิทยาลัย</Link></li>
														<li><Link href="https://council.rbru.ac.th/board" target="_blank">คณะกรรมการสภามหาวิทยาลัย</Link></li>
														<li><Link href="/About/Philosophy">ปรัชญา วิสัยทัศน์ พันธกิจ และ ยุทธศาสตร์</Link></li>
													</ul>
												</li>
											</ul>

											<ul className='con' id='tent'>
												<li><h3>อัตลักษณ์มหาวิทยาลัย</h3>
													<ul>
														<li><Link href="/About/Logo">พระราชลัญจกร</Link></li>
														<li><Link href="/About/GreenPink">สีชมพูเขียว</Link></li>
														<li><Link href="/About/Flower">ดอกชัยพฤกษ์</Link></li>
														<li><Link href="/About/Morale">คติธรรมประจำมหาวิทยาลัย</Link></li>
														<li><Link href="/About/Song">เพลงประจำมหาวิทยาลัย</Link></li>
														<li><Link href="/About/Multi">มัลติมีเดียของมหาวิทยาลัย</Link></li>
													</ul>
												</li>
												<li><h3>ติดต่อเรา</h3>
													<ul>
														<li><Link href="/About/Contact">คณะและหน่วยงานภายใน</Link></li>
														<li><Link href="/About/Map">แผนที่และการเดินทาง</Link></li>
														<li><Link href=" https://corrupt.rbru.ac.th/" target="_blank">แจ้งเรื่องร้องเรียนการทุจริต</Link></li>
														<li><Link href=" https://hotline.rbru.ac.th/" target="_blank">สายตรงอธิการ</Link></li>
														<li><Link href="#">ร่วมงานกับเรา</Link></li>
													</ul>
												</li>
											</ul>

											<ul className='con' >
												<li><h3>Smart Local University</h3>
													<ul>
														<li><Link href=" https://smartu.rbru.ac.th/" target="_blank">RBRU - Smart University</Link></li>
														<li><Link href=" https://smartu.rbru.ac.th/strategy1.php" target="_blank">5 ยุทธศาสตร์ Smart University </Link></li>
													</ul>
												</li>
												<li><h3>GREEN UNIVERSITY</h3>
													<ul>
														<li><Link href="http://www.green.rbru.ac.th/index.php" target="_blank">RBRU - GREEN UNIVERSITY</Link></li>
														<li><Link href="#">RBRU - Shuttle bus</Link></li>
													</ul>
												</li>
												<li> <h3>Sustainable Development Goals (SDGs)</h3>
													<ul>
														<li> <Link href="https://sdg.rbru.ac.th/" target="_blank">RBRU - SDGs</Link></li>
														<li><Link href="https://online.anyflip.com/fxzdy/mlkk/mobile/index.html" target="_blank">RBRU - Sustainability Report</Link></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="dropdowns">
									<button className="dropbtn dropdown-toggle btn btn-light"><span>การศึกษา</span></button>
									<div className="dropdowns-content fullwidth">
										<div className='content'>
											<div className='con' id='conbtn'>
												<Button variant="Secondary" className="dropbtn" href="/">ระบบรับสมัครนักศึกษา</Button>
												<Button variant="Secondary" className="dropbtn" href="/">คณะภายในมหาวิทยาลัย</Button>
												<Button variant="Secondary" className="dropbtn" href="/">ปฏิทินการศึกษา</Button>
											</div>

											<ul className='con nav-drop' id='tent'>
												<li><h3>หลักสูตร</h3>
													<ul>
														<li><a href="/Study/Bachelor">หลักสูตรปริญญาตรี</a></li>
														<li><a href="/Study/Master">หลักสูตรปริญญาโท</a></li>
														<li><a href="/Study/Doctor">หลักสูตรปริญญาเอก</a></li>

													</ul>
												</li>
												<li><h3>การสมัครเข้าศึกษา</h3>
													<ul>
														<li><a href="https://admission.rbru.ac.th/">การสมัครเข้าศึกษาระดับปริญญาบัณฑิต</a></li>
														<li><a href="#">ข่าวรับสมัครการศึกษา</a></li>
														<li><a href="#">ทุนการศึกษา</a></li>
													</ul>
												</li>
											</ul>

											<ul className='con nav-drop' >
												<li><h3>หน่วยงานการศึกษา</h3>
													<ul>
														<li><a href="/Study/Faculty">คณะ</a></li>
														<li><a href="/Study/Internal">หน่วยงานภายในมหาวิทยาลัย</a></li>
														<li><a href="/Study/School">โรงเรียนสาธิต</a></li>
													</ul>
												</li>
												<li> <h3>บริการนักศึกษา</h3>
													<ul>
														<li><a href="/quickmenu2">รวมสารสนเทศนักศึกษา</a></li>
														<li><a href="#">RBRU Facility</a></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="dropdowns">
									<button className="dropbtn dropdown-toggle btn btn-light">วิจัยและนวัตกรรม</button>
									<div className="dropdowns-content oneline ">
										<p><Link href=" https://eresearch.rbru.ac.th/" target="_blank">ระบบฐานข้อมูลวิจัยอิเล็กทรอนิกส์</Link></p>
										<p><Link href=" https://etheses.rbru.ac.th/" target="_blank">ระบบฐานข้อมูลวิทยานิพนธ์อิเล็กทรอนิกส์</Link></p>
										<p><Link href=" http://www.research.rbru.ac.th/journal.php" target="_blank">วารสารวิจัยรำไพพรรณี</Link></p>
										<p><Link href=" http://www.research.rbru.ac.th/" target="_blank">สถาบันวิจัยและพัฒนา</Link></p>
										<p><Link href=" https://so04.tci-thaijo.org/index.php/JRBGS/index" target="_blank">วารสารบัณฑิตวิทยาลัยรำไพพรรณี</Link></p>
										<p><Link href=" https://so02.tci-thaijo.org/index.php/ISSC/index" target="_blank">วารสารสหวิทยาการสังคมศาสตร์และการสื่อสาร</Link></p>

									</div>
								</div>
								<div className="dropdowns">
									<button className="dropbtn dropdown-toggle btn btn-light">ข่าวและประชาสัมพันธ์</button>
									<div className="dropdowns-content oneline">
										<p><Link href="#">ข่าวประชาสัมพันธ์</Link></p>
										<p><Link href="#">รางวัลแห่งความสำเร็จ</Link></p>
										<p><Link href="#">พัฒนาท้องถิ่น</Link></p>
										<p><Link href="#">RBRU MAGAZINE</Link></p>
										<p><Link href="#">ข่าวทุนการศึกษา</Link></p>
										<p><Link href="#">ข่าวรับสมัครงาน</Link></p>
										<p><Link href="#">ประกาศจัดซื้อจัดจ้าง</Link></p>
										<p><Link href="#">ประกาศมหาวิทยาลัยราชภัฏรำไพพรรณี</Link></p>
										<p><Link href="#">คำสั่งมหาวิทยาลัยราชภัฏรำไพพรรณี</Link></p>
										<p><Link href="#">ข้อบังคับมหาวิทยาลัยราชภัฏรำไพพรรณี</Link></p>

									</div>
								</div>
							</div>
							<div className="col-lg-2 ">
								<div className="get-quote">
									<div className="dropdowns">
										<button className="dropbtn dropdown-toggle btn btn-success active">คณะและหน่วยงานภายใน</button>
										<div className="dropdowns-content fullwidth">
											<div className='content nav-drop'>
												<ul className='con office' id='tenter'>
													<li><h3>คณะ</h3>
														<ul>
															<li><Link href=" http://www.science.rbru.ac.th/" target="_blank">คณะวิทยาศาสตร์และเทคโนโลยี</Link></li>
															<li><Link href=" http://www.edu.rbru.ac.th/" target="_blank">คณะครุศาสตร์</Link></li>
															<li><Link href=" http://www.social.rbru.ac.th/" target="_blank">คณะมนุษยศาสตร์และสังคมศาสตร์</Link></li>
															<li><Link href=" http://www.manage.rbru.ac.th/" target="_blank">คณะวิทยาการจัดการ</Link></li>
															<li><Link href=" http://www.agricul.rbru.ac.th/" target="_blank">คณะเทคโนโลยีการเกษตร</Link></li>
															<li><Link href=" http://www.industry.rbru.ac.th/" target="_blank">คณะเทคโนโลยีอุตสาหกรรม</Link></li>
															<li><Link href=" http://www.law.rbru.ac.th/" target="_blank">คณะนิติศาสตร์</Link></li>
															<li><Link href=" http://www.csit.rbru.ac.th/" target="_blank">คณะวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ</Link></li>
															<li><Link href=" http://www.com-arts.rbru.ac.th/" target="_blank">คณะนิเทศศาสตร์</Link></li>
															<li><Link href=" http://www.nurse.rbru.ac.th/" target="_blank">คณะพยาบาลศาสตร์</Link></li>
															<li><Link href=" http://www.satitschool.rbru.ac.th/" target="_blank">โรงเรียนสาธิต มหาวิทยาลัยราชภัฏรำไพพรรณี</Link></li>

														</ul>
													</li>
												</ul>

												<ul className='con office' >
													<li><h3>หน่วยงานภายในมหาวิทยาลัย</h3>
														<ul>
															<li><Link href=" http://www.atikarn.rbru.ac.th/" target="_blank">สำนักงานอธิการบดี</Link></li>
															<li><Link href=" https://council.rbru.ac.th/" target="_blank">สภามหาวิทยาลัย</Link></li>
															<li><Link href=" http://www.arit.rbru.ac.th/" target="_blank">สำนักวิทยบริการและเทคโนโลยีสารสนเทศ</Link></li>
															<li><Link href=" http://www.arts.rbru.ac.th/" target="_blank">สำนักศิลปวัฒนธรรมและพัฒนาชุมชน</Link></li>
															<li><Link href=" http://www.research.rbru.ac.th/" target="_blank">สถาบันวิจัยและพัฒนา</Link></li>
															<li><Link href=" http://www.inter.rbru.ac.th/" target="_blank">สถาบันนานาชาติ</Link></li>
															<li><Link href=" http://www.uniserv.rbru.ac.th/" target="_blank">สำนักบริการวิชาการ</Link></li>
															<li><Link href=" https://bu.rbru.ac.th/" target="_blank">สำนักทรัพย์สินและรายได้</Link></li>
															<li><Link href=" http://www.service.rbru.ac.th/" target="_blank">กองบริการการศึกษา</Link></li>
															<li><Link href=" https://student.rbru.ac.th/" target="_blank">กองพัฒนานักศึกษา</Link></li>
															<li><Link href=" https://financial.rbru.ac.th/" target="_blank">งานการเงิน</Link></li>
															<li><Link href=" https://www.personal.rbru.ac.th/" target="_blank">งานการเจ้าหน้าที่</Link></li>
															<li><Link href=" http://www.internal-audit.rbru.ac.th/" target="_blank">หน่วยตรวจสอบภายใน</Link></li>
															<li><Link href=" https://plan.rbru.ac.th/" target="_blank">กองนโยบายและแผน</Link></li>
															<li><Link href=" https://pr.rbru.ac.th/web/home.php" target="_blank">หน่วยประชาสัมพันธ์</Link></li>
															<li><Link href=" http://www.library.rbru.ac.th/" target="_blank">หอสมุดกลาง</Link></li>

														</ul>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

							</div>

						</div>
					</div>

				</div>
				
			</header>
		</>
	)
}

function ProvidedNavbar() {
	return (
		<ScrollObserver>
			<Navbars />
		</ScrollObserver>
	)
}

export default ProvidedNavbar
