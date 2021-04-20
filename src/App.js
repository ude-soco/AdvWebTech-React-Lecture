import React, {Component} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import Counter from "./components/Counter";
import {Provider} from "react-redux";
import {store} from "./redux/configureStore";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {unmount: false};
  }

  handleUnmount = () => {
    this.setState({
      unmount: !this.state.unmount,
    });
  };

  render() {
    // Styling
    let containerStyle = {marginTop: 150};
    let unmountStyle = {margin: 32};

    return (
      <Provider store={store}>
        <Container style={containerStyle}>
          <Row style={unmountStyle} className="justify-content-md-center">
            <Button className="btn-info" onClick={this.handleUnmount}>
              {this.state.unmount ? "Remount" : "Unmount"}
            </Button>
          </Row>
          {this.state.unmount ? (
            <></>
          ) : (
            <Row>
              <Col>
                <Counter/>
              </Col>
            </Row>
          )}
        </Container>
      </Provider>
    );
  }
}

export default App;
