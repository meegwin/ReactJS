import React from "react";

export default function Slider() {
  return (
    <div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} className />
          <li data-target="#demo" data-slide-to={2} className />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://fptshop.com.vn/Uploads/Originals/2019/7/29/637000093289504897_msi-gf63-9rcx-1.png"
              alt="Los Angeles"
              width="100%"
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://fptshop.com.vn/Uploads/Originals/2019/7/29/637000093289504897_msi-gf63-9rcx-1.png"
              alt="Chicago"
              width="100%"
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.tgdd.vn/Products/Images/44/187931/msi-gf63-8rd-221vn-thumb-600x600.jpg"
              alt="New York"
              width="100%"
              height={500}
            />
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </div>
  );
}
