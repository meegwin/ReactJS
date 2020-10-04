import React, { Component } from 'react'
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {
    type="Iphone";
    image = "https://cyber-demo-example-project-reactjs.vercel.app/img/applephone.jpg";
    render() {
        return (
            <div>
                <h2>Props </h2>
                {/**Props dùng để truyền dữ liệu giữa các compponent  */}

                {/**cách truyền dữ liệu */}
                {/* <FunctionProps loaiDT={this.type} hinhAnh={this.image}/> */}
                <ClassProps loaiDT={this.type} hinhAnh={this.image}/>
            </div>
        )
    }
}
