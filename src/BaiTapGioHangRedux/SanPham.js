import React, { Component } from "react";
import { connect } from "react-redux";
import { actAdd, actDetail } from ".././redux/actions";
class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.SanPham.hinhAnh} />
        <div className="card-body">
          <h4 className="card-title">VinSmart Live</h4>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.handleDetail(this.props.SanPham);
            }}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              const sanPhamDuocNhan = this.props.SanPham;
              this.props.handleAddCart(sanPhamDuocNhan);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // key:value
    // key là props của components : value là phương thức gửi action lên store
    handleDetail: (sp) => {
      dispatch(actDetail(sp));
    },
    handleAddCart: (product) => {
      dispatch(actAdd(product));
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPham);
