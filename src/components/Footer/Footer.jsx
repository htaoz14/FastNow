import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.jpg";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Fast Now</h5>
              <p> Ăn là mê – phê khỏi về
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Thời gian mở cửa</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Thứ hai - Chủ nhật</span>
                <p>10:00 am - 11:00 pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Chủ Nhật và các ngày lễ</span>
                <p>Phục vụ 24/24h</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Địa chỉ</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Địa chỉ: 48 Tố hữu - Nam từ liêm - Hà nội</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 012.345.6789</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: abc@xyz.vn</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Chính sách</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Chính sách hoạt động</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Chính sách và quy định</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Chính sách bảo mật</span>
              </ListGroupItem>
            </ListGroup>
            
          
          </Col>
        </Row>
        
      </Container>
    </footer>
  );
};

export default Footer;
