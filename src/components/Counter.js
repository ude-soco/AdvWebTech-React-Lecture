import React, {Component} from 'react';
import {Button, Col, Container, FormControl, Row} from "react-bootstrap";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 7,
      name: "Counter App",
    };
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

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  render() {

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
    let inputText = {
      marginTop: 24,
      width: 350,
      marginLeft: "auto",
      marginRight: "auto",
    };

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
              <Button
                variant="primary"
                className="btn-primary"
                onClick={this.handleByShiftKey(1)}
              >
                Increase
              </Button>
              <Button
                variant="primary"
                className="btn-danger"
                style={gutter}
                onClick={this.handleByShiftKey(-1)}
              >
                Decrease
              </Button>
              <Button
                variant="primary"
                className="btn-light"
                onClick={this.handleReset(0)}
              >
                Reset
              </Button>
            </Row>
          </Container>
        </Container>
        <Row style={inputText}>
          <FormControl
            placeholder="Type a new name here..."
            onChange={this.handleChangeName}
          />
        </Row>
      </>
    );
  }
}

export default Counter;