import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

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
    };
    return (
      <div style={{ marginBottom: 100 }}>
        <Slider ref={this.setRef} {...settings}>
          {this.props.images.map((imgSrc) => (
            <div className="testtest" key={imgSrc}>
              <Image
                src={imgSrc}
                layout="fill"
                objectFit="contain"
                alt={imgSrc}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
