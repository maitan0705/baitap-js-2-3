document.getElementById("btnTinhTien").onclick = function () {
  /*
    // input: tổng tiền thanh toán: number
            : phần trăm típ: number
            : số người được tip: number

    // progress: Lấy thông tin ngưới dùng nhận từ giao diện
    // ouput: tính tiền típ trên người 
           
    */
  var tongTienThanhToan = document.getElementById("tongTienThanhToan").value;
  var phanTramTip = document.getElementById("phanTramTip").value;
  var soNguoiTip = document.getElementById("soNguoiTip").value;
  var tienTipMotNguoi = 0;
  tienTipMotNguoi = (tongTienThanhToan * phanTramTip) / 100 / soNguoiTip;
  document.getElementById("tienTipMotNguoi").innerHTML = tienTipMotNguoi + "$";
};

document.getElementById("tinhTien").onclick = function () {
  /*
        input: số ngày làm: number
                lương ngày làm: nuber
        progress: lấy thông tin người dùng
            thành tiền: băng ngày lương * ngày làm
        output: tien lương

    */
  var soNgayLam = document.getElementById("soNgayLam").value;
  var tienLuongMotNgay = document.getElementById("tienLuongMotNgay").value;
  var tongTienLuong = soNgayLam * tienLuongMotNgay;

  document.getElementById("tongTienLuong").innerHTML = tongTienLuong + "$";
};

document.getElementById("tinhTrungBinh").onclick = function () {
  var so1 = document.getElementById("soThuTu1").value;
  var so2 = document.getElementById("soThuTu2").value;
  var so3 = document.getElementById("soThuTu3").value;
  var so4 = document.getElementById("soThuTu4").value;
  var so5 = document.getElementById("soThuTu5").value;
  var trungBinh =
    (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5;
  document.getElementById("trungBinh").innerHTML = trungBinh;
};

document.getElementById("quyDoi").onclick = function () {
  var tienUsd = document.getElementById("tienUsd").value;
  var dollar = 23500;
  var quyDoi = tienUsd * dollar;
  document.getElementById("tienQuyDoi").innerHTML =
    new Intl.NumberFormat("de-DE").format(quyDoi) + " vnd";
};
document.getElementById("tinh").onclick = function () {
  var chiuDai = document.getElementById("chiuDai").value;
  var chiRong = document.getElementById("chiRong").value;
  var chuVi = (Number(chiuDai) + Number(chiRong)) * 2;
  var dienTich = chiuDai * chiRong;
  document.getElementById("chuVi").innerHTML = new Intl.NumberFormat(
    "de-DE"
  ).format(chuVi);
  document.getElementById("dienTich").innerHTML = new Intl.NumberFormat(
    "de-DE"
  ).format(dienTich);
};

document.getElementById("tinhSo").onclick = function () {
  var so2ChuSo = document.getElementById("so2ChuSo").value;
  var soDuHangTruc = Math.floor(so2ChuSo / 10);
  var soDuHangdv = Math.floor(so2ChuSo % 10);
  var tong2KySo = soDuHangTruc + soDuHangdv;
  document.getElementById("tong2So").innerHTML =
    new Intl.NumberFormat("de-DE").format(tong2KySo) ;
};
