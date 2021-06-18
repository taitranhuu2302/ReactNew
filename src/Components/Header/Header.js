import React, { Component } from "react";
import "./styles.scss";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Container fluid={true} className="header-background">
        <Container className="header">
          <Row>
            <Col>
              <Navbar className="header-right">
                <NavbarBrand href="/">
                  <img
                    src="https://www.aorus.com/assets/img/logo.acad5b52.png"
                    alt=""
                    className="logo"
                  />
                </NavbarBrand>
              </Navbar>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Header;
