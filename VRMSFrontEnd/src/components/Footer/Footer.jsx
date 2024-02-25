import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

 

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="6" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                {/* <Icon icon="ri:motorbike-fill" /> */}
                  <i class="ri-motorbike-fill"></i>
                  <span>
                    Rent On Ride
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Welcome to our bike rental service! We offer top-quality bikes and exceptional customer service to ensure a convenient, affordable, and enjoyable biking experience. Whether you're exploring the city or hitting the trails, we've got you covered. Our commitment to customer satisfaction means you can trust us for all your biking needs.



            </p>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Contact Us</h5>
              <div className="newsletter">
                <input type="email" placeholder="Email" value="admin@rideonrent.com" readOnly/>
              </div>
            </div>
          </Col>

       
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
