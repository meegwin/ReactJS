/**
 * cách bước thực hiện:
 * 1.dàn layout
 * 2. xác định data thay đổi và lưu vào state
 * 3. lấy data trong state đi binding ra jsx
 * 4. Render mảng dữ liệu
 * 5. xây dựng chưc năng xem chi tiết
 * 6. Xây dựng chức năng thêm giỏ hàng
 * 7. Xây dựng chức năng xóa sp ra khỏi giỏ hàng
 * 8. xây dựng chức năng tăng giảm
 * 9. xây dựng chức năng hiển thị tổng số sản phẩm
 */

import React, { Component } from "react";
import Modal from "./Modal";
import SanPham from "./SanPham";
import { connect } from "react-redux";

class BaiTapGioHang extends Component {

  renderDanhSachSanPham = () => {
    return this.props.danhSachSanPham.map((product, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            SanPham={product}
            // handleDetail={this.handleDetail}
          />
        </div>
      );
    });
  };
  renderTotal = () => {
    let  danhSachGioHang  = [...this.props.danhSachGioHang];
    let total = danhSachGioHang.reduce((tong, cartHientai) => {
      return (tong += cartHientai.soLuong);
    }, 0);
    return total;
  };
  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng ({this.renderTotal()})
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderDanhSachSanPham()}</div>
            </div>
            <Modal
            />
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.props.sanPhamChiTiet.hinhAnh}
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.props.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.props.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.props.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.props.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.props.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.props.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //key : value
    // key sẽ là props của component: value là state được luuw trên store
    danhSachSanPham: state.gioHangReducer.danhSachSanPham,
    sanPhamChiTiet: state.gioHangReducer.sanPhamChiTiet,
    danhSachGioHang: state.gioHangReducer.danhSachGioHang,
  };
};

export default connect(mapStateToProps)(BaiTapGioHang);
