import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "../styles/checkout.css";
import { toast } from "react-toastify";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 0;
  const totalAmount = cartTotalAmount + shippingCost;
  const navigate = useNavigate()

  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry ] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterInfodes,setenterInfodes] = useState("");
  
  const shippingInfo = [];
  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      infodes: enterInfodes,
    };
    dispatch(cartActions.clearCart())
    toast.success('Đặt hàng thành công')
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
    navigate('/')
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mt-4">Địa chỉ giao hàng</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nhập tên của bạn"
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Số điện thoại"
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Thành phố"
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Quân/Huyện"
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Thêm thông tin để shipper dễ dàng tìm đường"
                    onChange={(e) => setenterInfodes(e.target.value)}
                  />
                </div>
                <button type="submit" className="addToCart__btn" >Thanh toán</button>
              </form>
              
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Tạm tính: <span>{cartTotalAmount}₫</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Phí giao hàng: Free<span>{shippingCost}₫</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                  Tổng cộng  : <span>{totalAmount}₫</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
