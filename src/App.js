import React, {Component} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 7,
      name: "Counter App",
    };
    // // Binding methods
    // this.handleReset = this.handleReset.bind(this);
    // this.handleIncrease = this.handleIncrease.bind(this);
    // this.handleDecrease = this.handleDecrease.bind(this);
  }

  // // Event handler functions with bind methods
  // handleIncrease() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  //
  // handleDecrease() {
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // }
  //
  // handleReset() {
  //   this.setState({
  //     count: 0,
  //   });
  // }

  // Arrow functions
  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleReset = (value) => {
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
    // Styling
    let containerStyle = {marginTop: 150};
    let counterStyle = {
      margin: "auto",
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 350,
      height: 350,
      borderRadius: 10,
      textAlign: "center",
    };
    let textStyle = {
      fontSize: 104,
      fontFamily: "sans-serif",
      color: "#444",
      fontWeight: "bold",
      marginBottom: 16,
    };
    let gutter = {margin: "0px 4px 0px 4px"}
    return (
      <>
        <Container style={containerStyle}>
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
                  className="btn-success"
                  // onClick={this.handleIncrease}
                  onClick={this.handleByShiftKey(1)}
                >
                  Increase
                </Button>
                <Button
                  className="btn-danger"
                  style={gutter}
                  // onClick={() => this.handleDecrease()}
                  onClick={this.handleByShiftKey(-1)}
                >
                  Decrease
                </Button>
                <Button
                  className="btn-light"
                  onClick={() => this.handleReset(0)}
                >
                  Reset
                </Button>
              </Row>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}

export default App;
