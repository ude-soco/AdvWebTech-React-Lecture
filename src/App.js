import React, {Component} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize the states
    this.state = {
      count: 7,
      name: "Counter App",
    };

    this.handleThisState = this.handleThisState.bind(this);
    this.handleSetState = this.handleSetState.bind(this);
  }

  handleSetState() {
    // Change the state using setState method
    this.setState({
      count: this.state.count + 1
    })
  }

  handleThisState() {
    // Mutating state directly is not a good practice
    this.state.count = this.state.count + 1;
  }

  render() {
    // Mutating state directly is not a good practice
    // this.state.count = 9

    // Access the states
    console.log(this.state.count);
    
    // Styling
    let containerStyle = {
      marginTop: 150,
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
    let textStyle = {
      fontSize: 104,
      fontFamily: "sans-serif",
      color: "#444",
      fontWeight: "bold",
      marginBottom: 16,
    };
    let gutter = {
      margin: "0px 4px 0px 4px"
    }
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
                <Col>
                  <Button
                    variant="primary"
                    className="btn-primary"
                    style={gutter}
                    onClick={this.handleSetState}
                  >
                    setState
                  </Button>
                  <Button
                    variant="danger"
                    className="btn-primary"
                    style={gutter}
                    onClick={this.handleThisState}
                  >
                    this.state
                  </Button>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}

export default App;
