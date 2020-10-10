import React, { Component } from "react";

export default class DemoCourse extends Component {
  danhSachKhoaHoc = ["ReactJS", "VueJS", "NodeJS"];
  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };
  render() { 
    return (
      <div>
        <h2> List and keys</h2>
        <h3>Danh sách khóa học</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
