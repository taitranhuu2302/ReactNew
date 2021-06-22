import React, { Component } from 'react'
import './styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";


class GearSlide extends Component {

    onGearSlide = (gearSlide) => {
        var result = null;

        result = gearSlide.map((item, index) => {
            return (
                <div key={index} className="slide-item">
                    <Link to={item.to}>
                        <div className="img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="caption">
                            <span className="caption-content">{item.caption}</span>
                        </div>
                    </Link>
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
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className="container-fluid p-0" id="gear-slide">
                <div className="row w-100">
                    <div className="col-12 caption-title text-center">
                        <h1>GAMING GEARS</h1>
                        <p>
                            AORUS is a world leading brand in high-performance motherboards, graphic cards, laptops gaming hardware and systems. We are passionate about teaming up with gamers to fearlessly challenge the limits and win ultimate glory.
                        </p>
                    </div>
                    <div className="col-12 slides">
                        <Slider {...settings}>
                            {this.onGearSlide(gearSlide)}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

const gearSlide = [
    {
        to: '/',
        image: 'https://www.aorus.com/assets/img/Laptop.e77d5ad1.png',
        caption: 'Gaming Laptops',
    },
    {
        to: '/',
        image: 'https://www.aorus.com/assets/img/Monitor.b4e0aada.png',
        caption: 'Gaming Monitors',
    },
    {
        to: '/',
        image: 'https://www.aorus.com/assets/img/Peripherals.9f53da7d.png',
        caption: 'Gaming Peripherals',
    },
    {
        to: '/',
        image: 'https://www.aorus.com/assets/img/Components.9dcdfdc0.png',
        caption: 'Premium Components',
    },
    {
        to: '/',
        image: 'https://www.aorus.com/assets/img/Desktop-PC.ab83c481.png',
        caption: 'DESKTOP PC',
    },
    {
        to: '/',
        image: 'https://www.aorus.com/assets/img/Motherboard.18fe2f57.png',
        caption: 'Gaming Motherboards',
    },
    {
        to: '/',
        image: 'https://www.aorus.com/assets/img/Graphics.6ca7d8bf.png',
        caption: 'Premium Graphics Cards',
    },
]

export default GearSlide;
