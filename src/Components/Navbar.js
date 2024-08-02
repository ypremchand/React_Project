import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';


const NavbarComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showSlider, setShowSlider] = useState(true);
    const [showContent, setShowContent] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleNavClick = () => {
        setShowSlider(false);
        setShowContent(false);
    };

    return (
        <div className="navbar-wrapper">
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src="//wrogn.com/cdn/shop/files/Isolation_Mode.png?v=1694797369&amp;width=600"
                            alt="Wrogn"
                            srcSet="//wrogn.com/cdn/shop/files/Isolation_Mode.png?v=1694797369&amp;width=40 40w, //wrogn.com/cdn/shop/files/Isolation_Mode.png?v=1694797369&amp;width=60 60w, //wrogn.com/cdn/shop/files/Isolation_Mode.png?v=1694797369&amp;width=80 80w"
                            width="40"
                            height="31.1"
                            className="d-inline-block align-top"
                            style={{ margin: "20px 50px" }}
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/TopWear" onClick={handleNavClick}>
                                <span className="nav-link-text">TopWear</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/BottomWear" onClick={handleNavClick}>
                                <span className="nav-link-text">BottomWear</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/FootWear" onClick={handleNavClick}>
                                <span className="nav-link-text">FootWear</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Mobiles" onClick={handleNavClick}>
                                <span className="nav-link-text">Mobiles</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Laptops" onClick={handleNavClick}>
                                <span className="nav-link-text">Laptops</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Accessories" onClick={handleNavClick}>
                                <span className="nav-link-text">Accessories</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/SignUp" onClick={handleNavClick}>
                                <span className="nav-link-text">SignUp</span>
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex ms-auto">
                            <Form.Control
                                type="search"
                                placeholder="Search..."
                                className="me-2"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <Button variant="outline-success bg-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showSlider && (
                <div className="slider-container">
                    <Slider {...settings}>
                        <div key={1}>
                            <center>
                                <img
                                    src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
                                    style={{ marginTop: "60px" }}
                                    alt="Slide 1"
                                />
                            </center>
                        </div>
                        <div key={2}>
                            <center>
                                <img
                                    src="https://img.freepik.com/free-vector/fashion-sale-landing-page-concept_23-2148597523.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=ais_user"
                                    style={{ marginTop: "60px", width: "800px", height: "350px" }}
                                    alt="Slide 2"
                                />
                            </center>
                        </div>
                        <div key={3}>
                            <center>
                                <img
                                    src="https://couponswala.com/blog/wp-content/uploads/2022/09/jeans-for-men-under-500.jpg.webp"
                                    style={{ marginTop: "60px", height: "350px", width: "800px" }}
                                    alt="Slide 3"
                                />
                            </center>
                        </div>
                        <div key={4}>
                            <center>
                                <img
                                    src="https://img.freepik.com/free-vector/fashion-store-banner-template_1361-1248.jpg"
                                    style={{ marginTop: "60px", width: "750px", height: "350px" }}
                                    alt="Slide 4"
                                />
                            </center>
                        </div>
                        <div key={5}>
                            <center>
                                <img
                                    src="https://img.freepik.com/free-psd/sales-discount-facebook-template_23-2149959351.jpg"
                                    style={{ marginTop: "60px", width: "750px", height: "350px" }}
                                    alt="Slide 5"
                                />
                            </center>
                        </div>
                        <div key={6}>
                            <center>
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-electronics-store-sale-banner-template_23-2151138129.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=ais_user"
                                    style={{ marginTop: "60px", width: "750px", height: "350px" }}
                                    alt="Slide 6"
                                />
                            </center>
                        </div>
                        <div key={7}>
                            <center>
                                <img
                                    src="https://img.freepik.com/free-vector/gradient-summer-sale-banner-template-with-photo_23-2148935972.jpg"
                                    style={{ marginTop: "60px", height: "350px", width: "750px" }}
                                    alt="Slide 7"
                                />
                            </center>
                        </div>
                    </Slider>
                </div>
            )}
            {showContent && (
                <div className="bg-light mt-5">
                <Container className="pt-4 pb-4">
                    <Row className="text-center text-md-start">
                        <Col md={4} className="mt-4">
                            <h5>ONLINE SHOPPING</h5>
                            <ul className="list-unstyled">
                                <li>TopWear</li>
                                <li>BottomWear</li>
                                <li>FootWear</li>
                                <li>Mobiles</li>
                                <li>Laptops</li>
                                <li>Accessories</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mt-4">
                            <h5>CUSTOMER POLICIES</h5>
                            <ul className="list-unstyled">
                                <li>Contact Us</li>
                                <li>FAQ</li>
                                <li>T&C</li>
                                <li>Terms Of Use</li>
                                <li>Track Orders</li>
                                <li>Shipping</li>
                                <li>Cancellation</li>
                                <li>Returns</li>
                                <li>Privacy policy</li>
                                <li>Grievance Officer</li>
                            </ul>
                        </Col>
                        <Col md={4} className="mt-4">
                            <h5>EXPERIENCE WE APP ON MOBILE</h5>
                            <div className="d-flex flex-column align-items-center">
                                <Image src="https://i.postimg.cc/s2KDVc03/download-removebg-preview.png" width="180px" className="mb-2" />
                                <Image src="https://i.postimg.cc/N0VN3h7T/apple-removebg-preview.png" width="200px" className="mb-2" />
                                <h6 className="mt-3">KEEP IN TOUCH</h6>
                                <div className="d-flex justify-content-between w-50">
                                    <a href='https://x.com/i/flow/login'><Image src="https://i.postimg.cc/wx09Z1wP/50278-removebg-preview.png" width="30px" className="rounded-circle border border-dark bg-dark" /></a>
                                    <a href='https://www.instagram.com/accounts/login/?next=%2Flivein.now%2Ftagged%2F&source=profile_tagged_tab'><Image src="https://i.postimg.cc/Mpv30mKW/3621435-removebg-preview.png" width="30px" className="rounded-circle border border-dark bg-dark" /></a>
                                    <a href='https://www.facebook.com/login/'><Image src="https://i.postimg.cc/SK2khfxR/images-removebg-preview-4.png" width="30px" className="rounded-circle border border-dark bg-dark" /></a>
                                    <a href='https://web.telegram.org/a/'><Image src="https://i.postimg.cc/QtD6NjJP/unnamed-removebg-preview.png" width="30px" className="rounded-circle border border-dark bg-dark" /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="text-center mt-4">
                        <Col>
                            <Image src="https://i.postimg.cc/5jd684zx/original-grunge-stamp-white-background-original-stamp-104606476-removebg-preview.png" width="60px" className="mb-2" />
                            <span><strong>100% ORIGINAL</strong> guarantee for <br />all products at WE.com</span>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="text-center text-md-start mt-4">
                        <Col md={4}>
                            <h6>In case of any concern, <a href="#contact-us" className="text-primary">Contact Us</a></h6>
                        </Col>
                        <Col md={4}>
                            <p>© 2024 www.NS.com. All rights reserved.</p>
                        </Col>
                        <Col md={4}>
                            <p>NS Company</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="mt-4">
                        <Col>
                            <h5>ONLINE SHOPPING MADE EASY AT NS</h5>
                            <p>If you would like to experience the best of online shopping for men, women, and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewelry, personal care products, and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favorites delivered right to your doorstep.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            )}
        </div>
    );
};

export default NavbarComponent;
