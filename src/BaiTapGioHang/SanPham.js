import React, { Component } from 'react'

export default class SanPham extends Component {
  
    render() {
        return (
            <div className="card">
            <img className="card-img-top" src={this.props.SanPham.hinhAnh}  />
            <div className="card-body">
              <h4 className="card-title">VinSmart Live</h4>
              <button className="btn btn-success" onClick={() =>{
                this.props.handleDetail(this.props.SanPham);
              }}>Chi tiết</button>
              <button className="btn btn-danger"
              onClick={() => {
                const sanPhamDuocNhan = this.props.SanPham;
                this.props.handleAddSP(sanPhamDuocNhan);
              }}
              >Thêm giỏ hàng</button>
            </div>
          </div>
        );
    }
}
