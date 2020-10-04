import React from 'react'

//cách nhận dữ liệu từ props
export default function FunctionProps(props) {
    console.log(props);
    return (
        <div>
            <h3>Function Props</h3>
            <p>Type: {props.loaiDT}</p>
            <img src={props.hinhAnh} alt="nice picture"/>
        </div>
    )
}
