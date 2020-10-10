import React, { Component } from 'react'

export default class DemoDataBinding extends Component {
    ten = "Tran Nhat Quang";
    lop = 52;
    //phuong thuc cua class 
    renderName = () => {
        return <p>DataBinding phương thức của hàm</p>
    }

    render() {
        //bien cua phuong thuc render
        const hinhAnh = "https://i.imgur.com/lC22izJ.png";
        return (
            <div>
                <h2>DataBinding</h2>
                <p>tên: { this.ten }</p>
                <p>Lớp: { this.lop }</p>
                <img src={hinhAnh} alt="hinh Anh"></img>
                {this.renderName()};
            </div>
        );
    }
}
