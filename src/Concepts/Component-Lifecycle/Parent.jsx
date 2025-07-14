import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cnt: 0,
    };
  }

  // This method is called when the component is mounted
  componentDidMount() {
    console.log("Parent component mounted");
  }

  // This method is called after the component updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Parent component updated");
  }

  // This method is called before the component updates
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("Parent getSnapshotBeforeUpdate called");
//     // You can return a value to be used in componentDidUpdate
//     console.log({ prevCount: prevState.count, prevCnt: prevState.cnt });
//     return { prevCount: prevState.count, prevCnt: prevState.cnt };
//   }

  // This method is used to render the component
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count+
        </button>
        <button onClick={() => this.setState({ cnt: this.state.cnt + 1 })}>
          cnt+
        </button>
        {this.state.cnt < 2 && <Child someValue={this.state.count} />}
      </div>
    );
  }
}

export default Parent;
