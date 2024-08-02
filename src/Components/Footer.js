import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default function Footer() {
    return (
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
    );
}
