import React, { Component, PureComponent } from "react";

export default class Child extends PureComponent {
  constructor(props) {}
  render() {
    console.log("render - child component");
    return (
      <div>
        <h1>Child </h1>
        <h3>Props number: {this.state.number}</h3>
      </div>
    );
  }
}
