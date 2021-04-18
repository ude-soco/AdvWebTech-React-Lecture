import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let gutter = {
      margin: "0px 8px 0px 8px",
    };
    let linkColor = {
      color: "#fff",
    };
    return (
      <Navbar bg="warning" variant="light" expand="lg">
        <Navbar.Brand href="/">Lecture: React Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button className="btn-info" style={gutter}>
              <Link to="/" style={linkColor}>
                First counter
              </Link>
            </Button>

            <Button variant="primary" className="btn-primary" style={gutter}>
              <Link to="/second" style={linkColor}>
                Second Counter
              </Link>
            </Button>

            <Button variant="success" className="btn-primary" style={gutter}>
              <Link to="/third" style={linkColor}>
                Third Counter
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
