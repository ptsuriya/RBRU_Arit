"use client"
import { useContext, useEffect, useState } from "react"
import ScrollObserver, { ScrollContext } from "@/utils/Scroll-observer"


import { Container, Row, Col } from "react-bootstrap";
import { Navbar } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./css/style.css"

import Link from "next/link"

const Navbars = () => {
	const { scrollY } = useContext(ScrollContext)
	const [atTop, setAtTop] = useState<boolean>(true)

	useEffect(() => {
		console.log(scrollY, ":", scrollY > 200)
		setAtTop(scrollY < 200)
	}, [scrollY])
	return (
		<>

			<Navbar className={`header ${!atTop && "sticky"}  p-0`}>
				<div className=" header-inner">
					<Container>
						<Row>
							<div className=" col-12 col-lg-4">
								<Link href="/"><img className="w-100 pt-1" src="/image/logo.png" alt="" /> </Link>

							</div><div className="col-lg-8 d-lg-flex justify-content-center">
								<Link href="/home"><button className="dropbtn btn btn-light" >หน้าหลัก</button></Link>
								<div className="dropdowns nav-drop">
									<button className="dropbtn dropdown-toggle btn btn-light"><span>สำนักวิทยฯ</span></button>
									<div className="dropdowns-content fullwidth content  ">
										<Container className="d-lg-flex">
											<ul className='con'>
												<li><h4>เกี่ยวกับสำนัก</h4>
													<ul>
														<li><Link href="/">ประวัติความเป็นมา</Link></li>
														<li><Link href="/" >ปรัชญา วิสัยทัศน์ พันธกิจ</Link></li>
														<li><Link href="/" >ค่านิยม ยุทธศาสตร์</Link></li>
														<li><Link href="/" >โครงสร้างองค์กร</Link></li>
														<li><Link href="/" >บุคลากร</Link></li>
														<li><Link href="/" >คณะกรรมการประจำสำนัก</Link></li>
														<li><Link href="/" >ที่ปรึกษาประจำสำนักวิทบริการฯ</Link></li>
														<li><Link href="/" >พื้นที่การให้บริการ</Link></li>
														<li><Link href="/" >คู่มือ จรรยาบรรณวิชาชีพ</Link></li>
														<li><Link href="/">ประกาศ กพอ. มาตรฐานของจรรยาบรรณ</Link></li>
														<li><Link href="/">ประกาศ / ระเบียบ</Link></li>
													</ul>
												</li>
											</ul>

											<ul className='con' id='tent'>
												<li>
													<h4>สถิติการให้บริการ</h4>
													<ul>
														<li><h5>ศูนย์เทคโนโลยีสารสนเทศ</h5>
															<ul>
																<li><Link href="">สถิติการใช้งานเว็บไซต์มหาวิทยาลัย</Link></li>
																<li><Link href="">รายงานผลทักษะด้านดิจิทัล</Link></li>
																<li><Link href="">สอบประเมินความรู้และทักษะด้านดิจิทัล</Link></li>
																<li><Link href="">รายงานผลการให้บริการซ่อมบำรุง</Link></li>
																<li><Link href="">รายงานผลงานฝึกอบรมและบริการ</Link></li>
																<li><Link href="">รายงานผลงานเครือข่าย</Link></li>
															</ul>
														</li>
														<li><h5>ศูนย์เทคโนโลยีการศึกษา</h5>
															<ul>
																<li><Link href="">RBRUMOOC</Link></li>
																<li><Link href="">หลักสูตรอบรมสำหรับบุคลากรขั้นพื้นฐาน</Link></li>
															</ul>
														</li>
														<li><h5>หอสมุดกลาง</h5>
															<ul>
																<li><Link href="">สถิติการใช้บริการหอสมุดกลาง</Link></li>
															</ul>
														</li>
														<li><h5>งานบริหารงานทั่วไป</h5>
															<ul>
																<li><Link href="">สถิติการใช้บริการห้อง</Link></li>
															</ul>
														</li>
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
										</Container>
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


						</Row>
					</Container>
				</div>

			</Navbar>
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
