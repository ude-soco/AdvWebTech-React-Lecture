import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {increase, decrease, reset} from "../redux/reducers/counterReducer";
import {connect} from 'react-redux';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Counter App",
    };
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
      backgroundColor: this.props.color ? this.props.color : "#FFC53A",
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
            <Col>{this.props.count}</Col>
          </Row>
          <Container>
            <Row className="align-item-md-center">
              <Button
                className="btn-primary"
                onClick={this.props.increase}
              >
                Increase
              </Button>
              <Button
                className="btn-danger"
                style={gutter}
                onClick={this.props.decrease}
              >
                Decrease
              </Button>
              <Button
                className="btn-light"
                onClick={this.props.reset}
              >
                Reset
              </Button>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = () => {
  return {
    increase,
    decrease,
    reset
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter);