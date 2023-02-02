import React from "react";
class ClassComponent extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      count: 0,
    };
  }
  updateCount = () => {
    this.setState((state) => ({ ...state, count: state.count + 1 }));
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>This is call ClassComponent {this.state.count}</h1>
        <button onClick={this.updateCount}>Class Btn</button>
      </>
    );
  }
}

export default ClassComponent;
