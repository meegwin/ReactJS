import { data } from "jquery";
import { DELETE_PRODUCT,TANG_GIAM } from "../constants/";
const initialState = {
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
  danhSachSanPham: [
    {
      maSanPham: "1",
      tenSanPham: "VinSmart Live",
      hinhAnh: "./images/img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+
            `,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: `Chính 48 MP &amp; Phụ 8 MP, 5 MP`,
      ram: "4 GB",
      rom: "6 GB",
      price: "12000000",
    },
    {
      maSanPham: "2",
      tenSanPham: "Meizu 16Xs",
      hinhAnh: "./images/img/meizuphone.jpg",
      manHinh: `	AMOLED, FHD+ 2232 x 1080 pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: `Chính 48 MP &amp; Phụ 8 MP, 5 MP`,
      ram: "4 GB",
      rom: "6 GB",
      price: "7800000",
    },
    {
      maSanPham: "3",
      tenSanPham: "Iphone XS Max",
      hinhAnh: "./images/img/applephone.jpg",
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: `Chính 48 MP &amp; Phụ 8 MP, 5 MP`,
      ram: "4 GB",
      rom: "6 GB",
      price: "20000000",
    },
  ],
};
// spread operator
const gioHangreducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "DETAIL_PRODUCT": {
      state.sanPhamChiTiet = actions.payload;
      return { ...state };
    }
    case "ADD_PRODUCT": {
      let danhSachGioHang = [...state.danhSachGioHang];
      const index = state.danhSachGioHang.findIndex((item) => {
        return item.maSanPham === actions.payload.maSanPham;
      });
      if (index !== -1) {
        //Tim thay =>Update SL
        const product = { ...danhSachGioHang[index] };
        product.soLuong += 1;
        danhSachGioHang[index] = product;
      } else {
        //Add vao gio hang
        actions.payload.soLuong = 1;
        danhSachGioHang = [...danhSachGioHang, actions.payload];
      }
      state.danhSachGioHang = danhSachGioHang;

      return { ...state };
    }
    case DELETE_PRODUCT: {
      let danhSachGioHang = [...state.danhSachGioHang];
      danhSachGioHang = danhSachGioHang.filter((item) => {
        return item.maSanPham !== actions.payload.maSanPham;
      });
      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }
    case TANG_GIAM: {
      let danhSachGioHang = [...state.danhSachGioHang];
      const index = danhSachGioHang.findIndex((item) => {
        return item.maSanPham === actions.payload.product.maSanPham;
      });
      if (index !== -1) {
        const product = { ...danhSachGioHang[index] };

        if (actions.payload.status) {
          //tang
          product.soLuong++;
        } else {
          //giam
          //neu so luong > 1 thi tru di
          //con khi so luong < 1 thi kh dc tru di nua
          if (danhSachGioHang[index].soLuong > 1) {
            product.soLuong--;
          } else {
            alert("kh dc giam");
          }
        }
        danhSachGioHang[index] = product;
      }
      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }
    default:
      break;
  }
  return state;
};
export default gioHangreducer;
