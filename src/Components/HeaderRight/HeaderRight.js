/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const subMenuProducts = [
    {
        to: '/',
        image: "https://www.aorus.com/assets/img/Motherboard.18fe2f57.png",
        label: "MOTHERBOARD"
    },
    {
        to: '/',
        image: "https://www.aorus.com/assets/img/Graphics.6ca7d8bf.png",
        label: "GRAPHICS CARDS"
    },
    {
        to: '/',
        image: "https://www.aorus.com/assets/img/Laptop.e77d5ad1.png",
        label: "LAPTOPS"
    },
    {
        to: '/',
        image: "https://www.aorus.com/assets/img/Monitor.b4e0aada.png",
        label: "MONITORS"
    },
    {
        to: '/',
        image: "https://www.aorus.com/assets/img/Desktop-PC.ab83c481.png",
        label: "DESKTOP PC"
    },
    {
        to: '/',
        image: "https://www.aorus.com/assets/img/Peripherals.9f53da7d.png",
        label: "PC PERIPHERALS"
    },
    {
        to: '/',
        image: "https://www.aorus.com/assets/img/Components.9dcdfdc0.png",
        label: "PC COMPONENTS"
    },
]

const subMenuExplore = [
    {
        to: '/',
        label: 'NEWS',
    },
    {
        to: '/',
        label: 'EVENTS',
    },
    {
        to: '/',
        label: 'BLOG',
    },
    {
        to: '/',
        label: 'WALLPAPER',
    },
]

const subMenuService = [
    {
        to: '/',
        label: 'WARRANTY INFORMATION'
    },
    {
        to: '/',
        label: 'PRODUCT REGISTRATION'
    },
]

const subMenuMember = [
    {
        to: '/',
        label: 'WHY JOIN?'
    },
    {
        to: '/',
        label: 'MEMBERSHIP LEVELS'
    },
    {
        to: '/',
        label: 'AORUS POINTS & REWADS'
    },
    {
        to: '/',
        label: 'ACHIVEMENT BAGGES'
    },
    {
        to: '/',
        label: 'MEMBER LEADERBOARD'
    },
    {
        to: '/',
        label: 'MEMBER FAQS'
    },
]

class HeaderRight extends Component {


    subMenupProduct = subMenuProducts.map(item => {
        return (
            <li className="drop-item">
                <Link to={item.to}><img src={item.image} alt="" /></Link>
                <div className="item-title">{item.label}</div>
            </li>
        )
    })

    subMenuExplore = subMenuExplore.map(item => {
        return (
            <li className="drop-item">
                <Link to={item.to} className="nav-link" >{item.label}</Link>
            </li>
        )
    })

    subMenuService = subMenuService.map(item => {
        return (
            <li className="drop-item">
                <Link to={item.to} className="nav-link">{item.label}</Link>
            </li>
        )
    })
    subMenuMember = subMenuMember.map(item => {
        return (
            <li className="drop-item">
                <Link to={item.to} className="nav-link" href="">{item.label}</Link>
            </li>
        )
    })

    render() {
        return (
            <Fragment>
                <div className="navbar">
                    <a hreft="/" className="navbar-brand">
                        <img src="https://www.aorus.com/assets/img/logo.acad5b52.png" className="logo" alt="" />
                    </a>
                </div>
                <img src="" alt="" />
                <ul className="nav h-100">
                    <li className="nav-item">
                        <a className="nav-link nav-title">
                            <span>PRODUCTS</span>
                            <i className="fas fa-chevron-down"></i>
                        </a>
                        <div className="wrapper-drop container-fluid">
                            <ul className="nav nav-drop justify-content-center">
                                {this.subMenupProduct}
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-title">
                            <span>EXPRLORE</span>
                            <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="nav sub-menu nav-drop flex-column">
                            {this.subMenuExplore}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-title">
                            <span>SERVICE</span>
                            <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="nav sub-menu nav-drop flex-column">
                            {this.subMenuService}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-title">
                            <span>MEMBERSHIP</span>
                            <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="nav sub-menu nav-drop flex-column">
                            {this.subMenuMember}
                        </ul>
                    </li>
                </ul>

            </Fragment>
        );
    }
}

export default HeaderRight;
