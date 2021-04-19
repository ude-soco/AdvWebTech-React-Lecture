import React, {Component} from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // styling
    let gutter = {margin: "0px 8px 0px 8px"};
    let linkColor = {color: "#fff"};

    return (
      <Navbar bg="warning" variant="light" expand="sm">
        <Navbar.Brand href="/">Lecture: React Router</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="info" style={gutter}>
              <Link to="/" style={linkColor}>First counter</Link>
            </Button>

            <Button variant="primary" style={gutter}>
              <Link to="/second" style={linkColor}>Second Counter</Link>
            </Button>

            <Button variant="success" style={gutter}>
              <Link to="/third" style={linkColor}>Third Counter</Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
