import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import '../../../styles/slider.css'

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    inifinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidetoScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Trời ưi , bánh Burger Phờ đỉnh quá :v tui ăn thử 1 miếng mà nghiện luôn nè , có ship sang Hàn quốc không shop :v "
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className="rounded"/>
          <h6>Rosé-BlackPink</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Pizza chay rất ngon mà lại tốt cho sức khỏe recomment ae ăn nhé , anh em có thể ăn 5 cái cũng không sợ béo như tôi nhé =)))"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className="rounded"/>
          <h6>Cj-GtaSan</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Wao,thật không thể tin nổi .Bánh mì ở đây ăn rất khác so với bên ngoài . 1 trải nghiệm tốt về món ăn Việt Nam "
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className="rounded"/>
          <h6>Gordon Ramsey</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
