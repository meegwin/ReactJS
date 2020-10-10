import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    /**
     * isLogin là thuộc tính của classs
     *  + true: đã đăng nhập => hiện tên người dùng
     *  + falsse: chưa đăng nhập => hiện nút login
     */
    state = {
        isLogin : false,
    }
    // isLogin = false;
    LoginClick = () =>{
        // this.isLogin = true;
        // this.renderLogin();
        // this.state.isLogin = true;
        this.setState({
            isLogin: true,
        });
    }
    // phuong thuc cua class
    renderLogin = () => {
        //Cach 1 dung if else
        if(this.state.isLogin){
            return <p>Nhat Quang</p>
        }else{
            return <button onClick={this.LoginClick}>Dang Nhap</button> 
        }
        //Cach 2 dung toan tu 3 ngoi
        // điều kiện ? xử lý dòng : xử lý sai
        // return this.isLogin ? <p>Nhat Quang</p> : <button>Dang Nhap</button>;
    }
    render() {
        console.log("run render");
        return (
            <div>
                <h2>Conditional and State</h2>
                <div>
                    {this.renderLogin()}
                </div>
            </div>
        )
    }
}
