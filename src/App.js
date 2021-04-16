import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Counter from "./components/Counter";

class App extends Component {
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


  render() {
    // Styling
    let containerStyle = {marginTop: 150};

    // An array of counter app names
    let counterApp = ["Counter App 1", "Counter App 2", "Counter App 3"]

    return (
      <>
        <Container style={containerStyle}>
          <Row>
            {/* Use map to iterate over the array "counterApp" */}
            {counterApp.map((counter, index) => {
              return (
                <Col key={index}>
                  {/* Counter child component with props */}
                  <Counter
                    name={counter}
                    count={this.state.count}
                    increase={this.handleByShiftKey(1)}
                    decrease={this.handleByShiftKey(-1)}
                    reset={this.handleReset(0)}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
