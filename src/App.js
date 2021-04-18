import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 7,
      name: "Counter App"
    };
  }

  render() {
    console.log(this.state);
    console.log(this.state.count);
    console.log(this.state.name);
    
    return (
      <div style={{textAlign: "center"}}>

        <h3>Counter App</h3>
        <h1>{this.state.count}</h1>

      </div>
    );
  }
}

export default App;
