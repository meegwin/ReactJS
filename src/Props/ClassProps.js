import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Class Props</h2>
        <p>Type: {this.props.loaiDT}</p>
                <img src={this.props.hinhAnh} alt="Picture"/>
            </div>
        )
    }
}
