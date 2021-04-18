import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import Counter from "./components/Counter";
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


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
        <Router>
          <NavigationBar/>
          <Switch>
            <Container style={containerStyle}>
              <Row>
                <Route path="/" exact>
                  <Counter color={"#5bc0de"}/>
                </Route>

                <Route path="/second">
                  <Counter color={"#0275d8"}/>
                </Route>

                <Route path="/third">
                  <Counter color={"#5cb85c"}/>
                </Route>
              </Row>
            </Container>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
