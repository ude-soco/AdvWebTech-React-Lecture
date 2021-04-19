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
          <Container style={containerStyle}>
            <Row>
              <Switch>
                <Route path="/" exact component={() => (<Counter pageName={"First counter"} color={"#5bc0de"}/>)}/>
                <Route path="/second" component={() => (<Counter pageName={"Second counter"} color={"#0275d8"}/>)}/>
                <Route path="/third" component={() => (<Counter pageName={"Third counter"} color={"#5cb85c"}/>)}/>
              </Switch>
            </Row>
          </Container>
        </Router>
      </>
    );
  }
}

export default App;
