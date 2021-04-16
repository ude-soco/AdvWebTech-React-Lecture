import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class Counter extends Component {
  constructor(props) {
    // Without super(prop), this.props will throw an error
    super(props);
    this.state = {};
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

    return (
      <div>
        <Container style={counterStyle}>
          <Row className="justify-content-md-center">
            <Col>
              <h3>{this.props.name}</h3>
            </Col>
          </Row>
          <Row style={textStyle} className="justify-content-md-center">
            <Col>{this.props.count}</Col>
          </Row>
          <Container>
            <Row className="align-item-md-center">
              <Button
                variant="primary"
                className="btn-primary"
                onClick={this.props.increase}
              >
                Increase
              </Button>
              <Button
                variant="primary"
                className="btn-danger"
                style={gutter}
                onClick={this.props.decrease}
              >
                Decrease
              </Button>
              <Button
                variant="primary"
                className="btn-light"
                onClick={this.props.reset}
              >
                Reset
              </Button>
            </Row>
          </Container>
        </Container>

      </div>
    );
  }
}

export default Counter;