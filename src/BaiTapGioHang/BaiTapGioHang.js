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

export default class BaiTapGioHang extends Component {
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
                Giỏ hàng (0)
              </button>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <img className="card-img-top" src="./images/img/vsphone.jpg" alt />
                    <div className="card-body">
                      <h4 className="card-title">VinSmart Live</h4>
                      <button className="btn btn-success">Chi tiết</button>
                      <button className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="./images/img/meizuphone.jpg"
                      alt
                    />
                    <div className="card-body">
                      <h4 className="card-title">Meizu 16Xs</h4>
                      <button className="btn btn-success">Chi tiết</button>
                      <button className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="./images/img/applephone.jpg"
                      alt
                    />
                    <div className="card-body">
                      <h4 className="card-title">Iphone XS Max</h4>
                      <button className="btn btn-success">Chi tiết</button>
                      <button className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modelId"
              tabIndex={-1}
              aria-labelledby="modelTitleId"
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <div
                className="modal-dialog"
                role="document"
                style={{ maxWidth: 1000 }}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Giỏ hàng</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Mã sản phẩm</th>
                          <th>tên sản phẩm</th>
                          <th>hình ảnh</th>
                          <th>số lượng</th>
                          <th>đơn giá</th>
                          <th>thành tiền</th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <img className="img-fluid" src="./images/img/applephone.jpg" alt />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>OLED, 6.5", 1242 x 2688 Pixels</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>Android 9.0 (Pie)</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>20 MP</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>Chính 48 MP &amp; Phụ 8 MP, 5 MP</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>4 GB</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>6 GB</td>
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
