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
const gioHangreducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "DETAIL_PRODUCT":
      {
        state.sanPhamChiTiet = actions.payload;
        return {...state};
      }

      break;

    default:
      break;
  }
  return state;
};
export default gioHangreducer;
