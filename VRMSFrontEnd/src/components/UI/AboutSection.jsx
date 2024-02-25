import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/images/hunter.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to bike rent service</h2>
              <p className="section__description">
              "Welcome to our bike rental service! At our company, we're passionate about providing top-quality bikes and outstanding customer service. With a dedication to customer satisfaction, we aim to make your bike rental experience convenient, affordable, and enjoyable. Our commitment to transparency means you can trust our competitive pricing and clear policies – no hidden fees, just honest rates for premium bikes. Explore our about page to learn more about our mission, values, and the team behind our trusted brand. Get ready to embark on unforgettable adventures with us!"


              </p>

          
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
