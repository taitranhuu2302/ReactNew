import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./styles.scss";

class Explore extends Component {

  onGearSlide = (gearSlide) => {
    var result = null;
    result = gearSlide.map((item, index) => {
      return (
        <div key={index} className="slide-item  d-flex flex-column align-items-center">
          <div className="img">
            <img src={item.image} alt="" />
            <div className="tag">{item.tag}</div>
          </div>
          <div className="slide-content">
            <h4 className="my-3">{item.caption}</h4>
            <Link to="/" type="button" className="btn caption-btn rounded-0 shadow-none">
              MORE
            </Link>
          </div>
        </div>
      )
    })
    return result;
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <div className="container-fluid slide-explore p-0">
        <div className="row w-100">
          <div className="col-12 caption-title text-center">
            <h1>EXPLORE #AORUS</h1>
            <p>
              Discover PC builds inspiration, DIY tips, gaming tricks, worldwide AORUS events, and more.
            </p>
            <Link to="/">GET STARTED <i className="fal fa-chevron-right"></i></Link>
          </div>
          <div className="col-12 slides">
            <Slider {...settings}>
              {this.onGearSlide(gearSlide)}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const gearSlide = [
  {
    image: 'https://global.aorus.com/upload/Product/F_202106161439842UJ8MT.JPG',
    tag: 'Dicover',
    caption: 'AORUS Best Gaming Setup: Part 10'
  },
  {
    image: 'https://global.aorus.com/upload/Product/F_202106021745954q5c10.JPG',
    tag: 'Tutorial',
    caption: 'Beginners 101 - PC and Console Gaming: Which Is the Choice for Me'
  },
  {
    image: 'https://global.aorus.com/upload/Product/F_20210531112199ic7mrR.JPG',
    tag: 'Event',
    caption: 'See The Passion of Creation'
  },
  {
    image: 'https://global.aorus.com/upload/Product/F_20210409115685JhyVsj.JPG',
    tag: 'Event',
    caption: 'WE LEAD IN RED - AORUS x AMD Q2 Promotion'
  },
  {
    image: 'https://global.aorus.com/upload/Product/F_2021061617552510lC7m.JPG',
    tag: 'Dicover',
    caption: " 【Member Submission】im_X's  AORUS Gaming Room "
  },
  {
    image: 'https://global.aorus.com/upload/Product/F_20210611153952cYywc3.JPG',
    tag: 'Dicover',
    caption: " 【Member Submission】Ace's AORUS Life "
  },
]

export default Explore;
