import React, { Component } from "react";
import HeaderRight from "../HeaderRight/HeaderRight";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import "./styles.scss";


class Header extends Component {
    render() {
        return (
            <div className="container-fluid" id="header">
                <div className="container header-content">
                    <div className="row h-100 align-items-center">
                        <div className="col-9 header-right h-100 d-flex align-items-center">
                            <HeaderRight/>
                        </div>
                        <div className="col-3 header-left text-end">
                            <HeaderLeft/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
