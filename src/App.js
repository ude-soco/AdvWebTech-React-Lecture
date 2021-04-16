import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 7,
    };
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>

        <h3>Counter App</h3>
        <h1>{this.state.count}</h1>

      </div>
    );
  }
}

export default App;
