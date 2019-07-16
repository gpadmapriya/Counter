import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    // this.reverseString = this.reverseString.bind(this);
  }

  incrementCounter = () => {
    const valueToModify = this.state.count;
    const newValue = valueToModify + 1;
    this.setState({ count: newValue });
  };

  decrementCounter = () => {
    const valueToModify = this.state.count;
    const newValue = valueToModify - 1;
    this.setState({ count: newValue });
  };
  render() {
    return (
      <section>
        <h3>{this.state.mainText}</h3>

        <p> {this.state.count}</p>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </section>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
