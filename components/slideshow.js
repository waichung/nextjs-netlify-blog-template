import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
  }

  setRef(slider) {
    //@ts-ignore
    return this && (this.slider = slider);
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      speed: 8000,
      draggable: false,
      variableWidth: true,
      pauseOnHover: false,
      rows: 1,
      slidesPerRow: 1,
    };
    return (
      <div style={{ marginBottom: 100 }}>
        <Slider ref={this.setRef} {...settings}>
          {this.props.images.map((imgSrc) => (
            <div className="testtest" key={imgSrc}>
              <img
                style={{ height: "100%", width: "auto" }}
                src={imgSrc}
                alt={imgSrc}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
