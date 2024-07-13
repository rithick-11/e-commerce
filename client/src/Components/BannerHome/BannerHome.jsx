import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { HomeBannerDiv } from "../StyledComponents";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerHome = () => {
  const [banners, setBanners] = useState([]);

  const getBanner = async () => {
    try {
      const res = await fetch("http://localhost:3031/users/home-banner");
      const banners = await res.json();
      setBanners(banners);
      console.log(banners);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    waitForAnimate: true,
  };

  return (
    <div className="slider-container mt-3 px-8 sm:px-24 text-white">
      <Slider {...settings}>
        {banners.map((each, i) => (
          <HomeBannerDiv
            className="text-white text-center flex flex-col justify-end"
            img={each.cardImg}
          >
            <h1>{each.title}</h1>
          </HomeBannerDiv>
        ))}
      </Slider>
    </div>
  );
};

export default BannerHome;
