import React from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import { useEffect, useState } from "react";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Giao hàng nhanh chóng",
    imgUrl: featureImg01,
    desc: "Chỉ 15-30p giao hàng kể cả giờ cao điểm",
  },
  {
    title: "Món ăn nóng hổi",
    imgUrl: featureImg02,
    desc: "Chúng tôi sẽ bảo quản thức ăn ngon nhất đến tay bạn",
  },
  {
    title: "Thưởng thức món ăn",
    imgUrl: featureImg03,
    desc: "Hãy tận hương món ăn ngon nhé",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, seeAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filterPizza = products.filter((item) => (item.category === "Pizza"));
    const slicePizza = filterPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      seeAllProducts(products);
    }

    if (category === "BURGER") {
      const filterProducts = products.filter(
        (item) => item.category === "Burger"
      );
      seeAllProducts(filterProducts);
      console.log("Burger active");
    }

    if (category === "PIZZA") {
      const filterProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      seeAllProducts(filterProducts);
    }

    if (category === "BREAD") {
      const filterProducts = products.filter(
        (item) => item.category === "Bread"
      );
      seeAllProducts(filterProducts);
    }
  }, [category]);

  return (
    <><Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3"> Order 1 cách dễ dàng</h5>
                <h1 className="mb-4 hero__title">
                  <span>Đói ư?</span> Đợi chút <br /> đặt ngay
                  <span> cho nóng</span>
                </h1>
                <p>
                  Nhìn có vẻ là tôi suy tư nhưng đến 95% suy nghĩ não bộ của tôi là ăn gì trưa nay.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Đặt ngay <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">Tất cả món ngon</Link>
                  </button>
                </div>
              </div>
              <div className="hero__service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span>
                  Freeship
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                  </span>
                  100% Thanh toán an toàn
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Chúng tôi phục vụ những gì?</h5>
              <h2 className="feature__title">Đặt món và chớp mắt</h2>
              <h2 className="feature__title">
                Chúng tôi <span>sẽ làm cho bạn hài lòng </span>
              </h2>
              <p className="mb-1 mt-4 feature-text">
                Fast Now sự lựa chọn hoàn hảo của bạn
              </p>
              <p className="feature-text">
                Chúng tôi sẽ phục vụ các bạn 1 cách nhanh và tốt nhất
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    className="w-25 mb-3"
                    src={item.imgUrl}
                    alt="feature-img" />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Menu các món</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center gap-4 justify-content-center">
                <button
                  className={`all__btn ${category === "ALL" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory("BURGER")}
                  className={`d-flex align-items-center gap-2 ${category === "BURGER" ? "foodBtnActive" : ""}`}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  onClick={() => setCategory("PIZZA")}
                  className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? "foodBtnActive" : ""}`}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  onClick={() => setCategory("BREAD")}
                  className={`d-flex align-items-center gap-2 ${category === "BREAD" ? "foodBtnActive" : ""}`}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs='6' key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-fast-now" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Fast Now</span>
                </h2>
                <p className="testy__treat-desc">
                  Fast Now ra đời có sự mệnh đáp ứng nhu cầu của khách hàng về đồ ăn nhanh.Những món ăn chất lượng từ khâu chọn lọc tới khâu nấu ăn. Vệ sinh an toàn là thứ đặt lên hằng đầu để cửa hàng uy tín hợ trong mắt thực khách.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem style={{backgroundColor : "#fcfcfc"}} className="border-0 ps-0 ">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                    <i class="ri-checkbox-circle-line"></i>
                    Thực phẩm tươi ngon
                  </p>
                  <p className="choose__us-desc">
                    Thực phẩm được lấy mới và sử dụng trong ngày
                  </p>
                </ListGroupItem>

                <ListGroupItem style={{backgroundColor : "#fcfcfc"}} className="border-0 ps-0">
                  <p className="choose__us-title d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>
                    Hỗ trợ nhiệt tình thân thiện
                  </p>
                  <p className="choose__us-desc">
                    Chúng tôi sẵn sàng trả lời mọi câu hỏi thắc mắc của quý khách 
                  </p>
                </ListGroupItem>

                <ListGroupItem style={{backgroundColor : "#fcfcfc"}} className="border-0 ps-0">
                  <p className="choose__us-title d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>
                   Order mọi nơi
                  </p>
                  <p className="choose__us-desc">
                    Cửa hàng ship với tốc độ của the Flash nên quý khách không cần chờ đợi quá lâu khi đặt hàng 
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section><section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section><section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Lời chứng thực </h5>
                <h2 className="testimonial__title mb-4">
                  Những đánh giá của <span>khách hàng</span> đã trải nghiệm
                </h2>
                <p className="testimonial__decs">
                  Bên dưới là nhưng lời đánh giá nổi bật của những khách hàng ngẫu nhiên :
                </p>

                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="network-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
    </>
  );
};

export default Home;
