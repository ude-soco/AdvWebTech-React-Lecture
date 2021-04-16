import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    // Styling
    let containerStyle = {marginTop: 150};
    return (
      <>
        <Container style={containerStyle}>
          <Row>
            <Col>
              <Counter/>
            </Col>
            <Col>
              <Counter/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
