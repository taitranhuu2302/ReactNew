import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { Link } from 'react-router-dom';

class GraphicsCard extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div className="container-fluid" id="graphics-card">
                <div className="container-fluid title">
                    <div className="container">
                        <h2 className="text-center">GRAPHICS CARDS</h2>
                        <Slider {...settings} className="slides">
                            <div className="slide-item">
                                <Link to="/">
                                    <div className="img">
                                        <img src="https://www.aorus.com/assets/img/graphics-cards-aorus.58760d9d.png" className="w-100 img-fluid" alt="" />
                                    </div>
                                    <div className="slide-title">
                                        AORUS
                                    </div>
                                </Link>
                            </div>
                            <div className="slide-item">
                                <div className="img">
                                    <img src="https://www.aorus.com/assets/img/graphics-cards-aorus.58760d9d.png" className="w-100 img-fluid" alt="" />
                                </div>
                                <div className="slide-title">
                                    AORUS
                                </div>
                            </div>
                            <div className="slide-item">
                                <div className="img">
                                    <img src="https://www.aorus.com/assets/img/graphics-cards-aorus.58760d9d.png" className="w-100 img-fluid" alt="" />
                                </div>
                                <div className="slide-title">
                                    AORUS
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default GraphicsCard;
