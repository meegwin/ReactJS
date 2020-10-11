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
import { connect} from 'react-redux';


class BaiTapGioHang extends Component {
  // danhSachSanPham = [
  //   {
  //     maSanPham: "1",
  //     tenSanPham: "VinSmart Live",
  //     hinhAnh: "./images/img/vsphone.jpg",
  //     manHinh: `AMOLED, 6.2", Full HD+
  //       `,
  //     heDieuHanh: "Android 9.0 (Pie)",
  //     cameraTruoc: "20 MP",
  //     cameraSau: `Chính 48 MP &amp; Phụ 8 MP, 5 MP`,
  //     ram: "4 GB",
  //     rom: "6 GB",
  //     price: "12000000",
  //   },
  //   {
  //     maSanPham: "2",
  //     tenSanPham: "Meizu 16Xs",
  //     hinhAnh: "./images/img/meizuphone.jpg",
  //     manHinh: `	AMOLED, FHD+ 2232 x 1080 pixels`,
  //     heDieuHanh: "Android 9.0 (Pie)",
  //     cameraTruoc: "20 MP",
  //     cameraSau: `Chính 48 MP &amp; Phụ 8 MP, 5 MP`,
  //     ram: "4 GB",
  //     rom: "6 GB",
  //     price: "7800000",
  //   },
  //   {
  //     maSanPham: "3",
  //     tenSanPham: "Iphone XS Max",
  //     hinhAnh: "./images/img/applephone.jpg",
  //     manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
  //     heDieuHanh: "Android 9.0 (Pie)",
  //     cameraTruoc: "20 MP",
  //     cameraSau: `Chính 48 MP &amp; Phụ 8 MP, 5 MP`,
  //     ram: "4 GB",
  //     rom: "6 GB",
  //     price: "20000000",
  //   },
  // ];

  state = {
    sanPhamChiTiet: {
      maSanPham: "1",
      hinhAnh: "./images/img/vsphone.jpg",
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: `Chính 48 MP &amp; Phụ 8 MP, 5 MP`,
      ram: "4 GB",
      rom: "6 GB",
    },
    danhSachGioHang: [],
  };
  handleTangGiam = (cart, status) => {
    /**
     * Các bước thực hiện
     * 1.lấy mảng giở hàng
     * 2.tìm vị trị của phần tử được nhấn
     * 3. Check xem lằ tăng hay giảm ( status)
     * 4. cập nhật lại state
     */
    // let danhSachGioHang = this.state.danhSachGioHang;
    let { danhSachGioHang, sanPhamChiTiet } = this.state;
    const index = danhSachGioHang.findIndex((item) => {
      return item.maSanPham === cart.maSanPham;
    });
    if (index !== -1) {
      if (status) {
        // tăng
        danhSachGioHang[index].soLuong += 1;
      } else {
        // giảm
        if (danhSachGioHang[index].soLuong > 1) {
          danhSachGioHang[index].soLuong -= 1;
        } else {
          alert("kh dc giam");
        }
      }
    }
    this.setState({ danhSachGioHang });
  };
  handleDelete = (cart) => {
    let danhSachGioHang = this.state.danhSachGioHang;
    danhSachGioHang = danhSachGioHang.filter((item) => {
      return cart.maSanPham !== item.maSanPham;
    });
    this.setState({ danhSachGioHang });
  };

  handleAddSP = (sanPham) => {
    let danhSachGioHang = [...this.state.danhSachGioHang];
    /**
     * findIndex tìm xem có tồn tại trong mãng hay không
     * nếu có tồn tại trả về index
     * nếu kh tồn tại trả về -1
     */
    const index = danhSachGioHang.findIndex((cart) => {
      return cart.maSanPham === sanPham.maSanPham;
    });
    if (index !== -1) {
      //tìm thấy
      //cap nhat so luong
      danhSachGioHang[index].soLuong += 1;
    } else {
      sanPham.soLuong = 1;
      //kh tìm thấy
      //push vao mang,set so luong
      danhSachGioHang = [...danhSachGioHang, sanPham];
    }

    this.setState({
      danhSachGioHang: danhSachGioHang,
    });
  };

  handleDetail = (sanPham) => {
    // setState
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };

  renderDanhSachSanPham = () => {
    return this.props.danhSachSanPham.map((product, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            SanPham={product}
            // handleDetail={this.handleDetail}
            handleAddSP={this.handleAddSP}
          />
        </div>
      );
    });
  };
  renderTotal = () => {
    let { danhSachGioHang } = this.state;
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
              handleTangGiam={this.handleTangGiam}
              handleDelete={this.handleDelete}
              danhSachGioHang={this.state.danhSachGioHang}
            />
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
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
    danhSachSanPham : state.gioHangReducer.danhSachSanPham,
    sanPhamChiTiet: state.gioHangReducer.sanPhamChiTiet,
  }
}

export default connect(mapStateToProps)(BaiTapGioHang);
