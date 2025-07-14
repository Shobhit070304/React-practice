import { Component } from "react";

class Child extends Component {
  // Constructor to initialize state based on props
  constructor(props) {
    super(props);
    // Initialize state based on props
    this.state = {
      someValue: props.someValue,
    };
  }

  // This method is called when the component is mounted
  componentDidMount() {
    console.log("Child component mounted");
  }

  // Used to update state based on props changes
  static getDerivedStateFromProps(nextProps, prevState) {
    // This method can be used to update state based on props changes
    if (nextProps.someValue !== prevState.someValue) {
      //   console.log(
      //     "Child component updated with new value:",
      //     nextProps.someValue
      //   );
      return { someValue: nextProps.someValue };
    }
    console.log("No change in props, child state remains the same");
    return null; // No state update in this case
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     // This method can be used to control whether the component should update
  //     console.log(
  //       "Child shouldComponentUpdate comparison:",
  //       nextProps.someValue !== this.state.someValue
  //     );
  //     return nextProps.someValue !== this.state.someValue;
  //   }

  // This method is called just before the component is removed from the DOM
  componentWillUnmount() {
    console.log("Child component will unmount");
  }

  // This method is used to render the component
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <p>Some Value: {this.state.someValue}</p>
      </div>
    );
  }
}

export default Child;
