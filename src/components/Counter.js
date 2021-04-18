import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class Counter extends Component {
  constructor(props) {
    super(props);

    // Lifecycle: Constructor initialized
    console.log("Constructor initialized");

    this.state = {
      count: 7,
      name: "Counter App",
    };
  }

  // Lifecycle: Component did mount
  componentDidMount() {
    console.log("Component mounted!");
  }

  // Lifecycle: Component did update
  componentDidUpdate = () => {
    console.log("Component updated!");
  };

  // Lifecycle: Component will unmount
  componentWillUnmount() {
    console.log("Component is unmounted from the DOM!");
  }

  handleReset = (value) => () => {
    this.setState({
      count: value,
    });
  }

  handleByShiftKey = (number) => (e) => {
    if (e.shiftKey) {
      this.setState({
        count: this.state.count + number * 10,
      });
    } else {
      this.setState({
        count: this.state.count + number,
      });
    }
  }

  render() {
    // Lifecycle: Render method initialized
    console.log("Render method initialized");

    // Styling
    let textStyle = {
      fontSize: 104,
      fontFamily: "sans-serif",
      color: "#444",
      fontWeight: "bold",
      marginBottom: 16,
    };

    let counterStyle = {
      margin: "auto",
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 350,
      height: 350,
      borderRadius: 10,
      textAlign: "center",
    };
    let gutter = {margin: "0px 4px 0px 4px"}

    return (
      <>
        <Container style={counterStyle}>
          <Row className="justify-content-md-center">
            <Col>
              <h3>{this.state.name}</h3>
            </Col>
          </Row>
          <Row style={textStyle} className="justify-content-md-center">
            <Col>{this.state.count}</Col>
          </Row>
          <Container>
            <Row className="align-item-md-center">
              <Button className="btn-primary" onClick={this.handleByShiftKey(1)}>
                Increase
              </Button>
              <Button className="btn-danger" style={gutter} onClick={this.handleByShiftKey(-1)}>
                Decrease
              </Button>
              <Button className="btn-light" onClick={this.handleReset(0)}>
                Reset
              </Button>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

export default Counter;