import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "swiper/dist/js/swiper.min.js";
class SwiperComponent extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="swiper-container contains" ref="ScDom">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={require("../../static/images/video.png")} alt="" />
          </div>
          <div className="swiper-slide">
            <img
              src={require("../../static/images/banner_activite.jpg")}
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img src={require("../../static/images/banner1.png")} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={require("../../static/images/home.png")} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={require("../../static/images/video717.png")} alt="" />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
      var mySwiper = new Swiper('.contains',{
        loop: true, // 无缝
        autoplay: {
          disableOnInteraction: false
        },
        autoplayDisableOnInteraction:false
        })
  }
}
export default SwiperComponent;
