import React, { Component } from "react";
import Child from "./child";
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("constructor - chay 1 lan duy nhat ");
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount - chay 1 lan duy nhat ");
  }
  componentDidMount() {
    /**
     * gọi api, nhiều thứ quan trọng  khác
     */
    console.log("componentDidMount - chay 1 lan duy nhat ");
  }
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate - chay 1 lan duy nhat ");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    if (nextState.number === 3) {
      return false;
    }
    return true;
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    console.log("render - chay lai khi state thay doi");
    return (
      <div>
        LifeCycle
        <h1>NUMBER: {this.state.number}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: (this.state.number += 1),
            });
          }}
        >
          Tawng so
        </button>
        <Child />
      </div>
    );
  }
}
