/**
 ** Bài 1: Sắp xếp 3 số theo thứ tự tăng dần
 ** Đầu vào: số thứ nhất, số thứ hai, số thứ ba
 ** Xử lý:
 * - Tạo biến: a, b, c, soLonNhat, soLonNhi, soNhoNhat, ketQua
 * - Lấy giá trị người dùng nhập vào của 3 số nguyên gán lần lượt cho 3 biến a, b, c
 * - Giả sử:
 *  + Nếu a > b && a > c && b > c => c, b, a;
 *  + Nếu a > b && a > c && c > b => a, c, b;
 *  + Nếu b > a && b > c && a > c => b, a, c;
 *  + Nếu b > a && b > c && c > a => b, c, a;
 *  + Nếu c > a && c > b && a > b => c, a, b;
 *  + Nếu c > b && c > a && b > a => a, b, c;
 ** Đầu ra: Thông báo kết quả
 */

document.getElementById("btnSapXep").onclick = function () {
  var a = document.getElementById("txtsoThuNhat").value * 1;
  var b = document.getElementById("txtsoThuHai").value * 1;
  var c = document.getElementById("txtsoThuBa").value * 1;
  var soLonNhat, soLonNhi, soNhoNhat;
  if (a > b && a > c && b > c) {
    soLonNhat = a;
    soLonNhi = b;
    soNhoNhat = c;
  } else if (a > b && a > c && c > b) {
    soLonNhat = a;
    soLonNhi = c;
    soNhoNhat = b;
  } else if (b > a && b > c && a > c) {
    soLonNhat = b;
    soLonNhi = a;
    soNhoNhat = c;
  } else if (b > a && b > c && c > a) {
    soLonNhat = b;
    soLonNhi = c;
    soNhoNhat = a;
  } else if (c > a && c > b && a > b) {
    soLonNhat = c;
    soLonNhi = a;
    soNhoNhat = b;
  } else if (c > b && c > a && b > a) {
    soLonNhat = c;
    soLonNhi = b;
    soNhoNhat = a;
  }
  var ketQua = "<div>";
  ketQua += "Thứ tự tăng dần là: ";
  ketQua += soNhoNhat + ", ";
  ketQua += soLonNhi + ", ";
  ketQua += soLonNhat;
  ketQua += "</div>";
  document.getElementById("footerTangDan").innerHTML = ketQua;
  document.getElementById("footerTangDan").style.color = "red";
  document.getElementById("footerTangDan").style.fontSize = "20px";
};

/**
 ** Bài 2: Chương trình chào hỏi
 ** Đầu vào: ai sử dụng máy
 ** Xử lý:
 * - Tạo biến: aiSuDungMay, B, M, A, E, result;
 * - Lấy giá trị người dùng nhập vào gán cho biến aiSuDungMay
 * - Gán giá trị cho các biến: B, M, A, E
 * - Giả sử: gia đình 4 người(ba, mẹ, anh trai, em gái)
 *  + Nếu aiSuDungMay == B => Xin chào ba! Ba là chồng của mẹ.
 *  + Nếu aiSuDungMay == M => Xin chào mẹ! Mẹ là vợ của ba.
 *  + Nếu aiSuDungMay == A => Xin chào anh trai! Anh trai là người con thứ nhất của ba mẹ.
 *  + Nếu aiSuDungMay == E => Xin chào em gái! Em gái là người con thứ hai của ba mẹ.
 ** Đầu ra: thông báo kết quả
 */

document.getElementById("btnchaoHoi").onclick = function () {
  var aiSuDungMay = document.getElementById("txtaiSuDung").value;
  var B = "ba";
  var M = "mẹ";
  var A = "anh trai";
  var E = "em gái";
  var result;
  switch (aiSuDungMay) {
    case B:
      result = "Xin chào ba! Ba là chồng của mẹ.";
      break;
    case M:
      result = "Xin chào mẹ! Mẹ là vợ của ba.";
      break;
    case A:
      result = "Xin chào anh trai! Anh trai là anh hai trong gia đình.";
      break;
    case E:
      result = "Xin chào em gái! Em gái là con út trong gia đình";
      break;
    default:
      result = "Không phải thành viên trong gia đình.";
      break;
  }
  document.getElementById("footerchaoHoi").innerHTML = result;
  document.getElementById("footerchaoHoi").style.color = "red";
  document.getElementById("footerchaoHoi").style.fontSize = "20px";
};

/**
 ** Bài 3: Đếm có bao nhiêu số chẵn và số lẻ
 ** Đầu vào: số thứ nhất, số thứ hai, số thứ ba
 ** Xử lý:
 * - Tạo biến soThuNhat, soThuHai, soThuBa, result;
 * - Lấy value người dùng nhập vào gán lấy lần vào các biến soThuNhat, soThuHai, soThuBa;
 * - Giả sử:
 *  + TH1: (soThuNhat % 2 == 0 && soThuHai % 2 == 0 && soThuBa % 2 == 0);
 *  => có 3 số chẵn
 *  + TH2:
 *   ++ (soThuNhat % 2 == 0 && soThuHai % 2 != 0 && soThuBa % 2 != 0);
 *   ++ (soThuNhat % 2 != 0 && soThuHai % 2 == 0 && soThuBa % 2 != 0);
 *   ++ (soThuNhat % 2 != 0 && soThuHai % 2 != 0 && soThuBa % 2 == 0);
 *  => có 1 số chẵn và 2 số lẻ
 *  + TH3:
 *   ++ (soThuNhat % 2 == 0 && soThuHai % 2 == 0 && soThuBa % 2 != 0);
 *   ++ (soThuNhat % 2 == 0 && soThuHai % 2 != 0 && soThuBa % 2 == 0);
 *   ++ (soThuNhat % 2 != 0 && soThuHai % 2 == 0 && soThuBa % 2 == 0);
 *  => có 2 số lẻ và 1 số chẵn
 *  + TH4: (soThuNhat % 2 != 0 && soThuHai % 2 != 0 && soThuBa % 2 != 0);
 *  => Có 3 số lẻ
 ** Đầu ra: Thông báo kết quả
 */

document.getElementById("btnDem").onclick = function () {
  var soThuNhat = document.getElementById("txtso1").value * 1;
  var soThuHai = document.getElementById("txtso2").value * 1;
  var soThuBa = document.getElementById("txtso3").value * 1;
  var result;
  if (soThuNhat % 2 == 0 && soThuHai % 2 == 0 && soThuBa % 2 == 0) {
    result = "Có 3 số chẵn";
  } else if (soThuNhat % 2 == 0 && soThuHai % 2 != 0 && soThuBa % 2 != 0) {
    result = "Có 1 số chẵn và 2 số lẻ";
  } else if (soThuNhat % 2 != 0 && soThuHai % 2 == 0 && soThuBa % 2 != 0) {
    result = "Có 1 số chẵn và 2 số lẻ";
  } else if (soThuNhat % 2 != 0 && soThuHai % 2 != 0 && soThuBa % 2 == 0) {
    result = "Có 1 số chẵn và 2 số lẻ";
  } else if (soThuNhat % 2 == 0 && soThuHai % 2 == 0 && soThuBa % 2 != 0) {
    result = "Có 2 số chẵn và 1 số lẻ";
  } else if (soThuNhat % 2 == 0 && soThuHai % 2 != 0 && soThuBa % 2 == 0) {
    result = "Có 2 số chẵn và 1 số lẻ";
  } else if (soThuNhat % 2 != 0 && soThuHai % 2 == 0 && soThuBa % 2 == 0) {
    result = "Có 2 số chẵn và 1 số lẻ";
  } else if (soThuNhat % 2 != 0 && soThuHai % 2 != 0 && soThuBa % 2 != 0) {
    result = "Có 3 số lẻ";
  }
  document.getElementById("footerDemSoChanLe").innerHTML = result;
  document.getElementById("footerDemSoChanLe").style.color = "red";
  document.getElementById("footerDemSoChanLe").style.fontSize = "20px";
};

/**
 ** Bài 4: Tam giác
 ** Đầu vào: cạnh thứ nhất, cạnh thứ hai, cạnh thứ ba
 ** Xử lý:
 * - Tạo biến a, b, c, result;
 * - Lấy giá trị người dùng nhập vào gán lần lượt vào các biến a, b, c
 * - Giả sử:
 *  + Nếu (a == b) && (a == c) && (b == c) => Tam giác đều;
 *  + Nếu (a == b) || (a == c) || (b == c) => Tam giác cân;
 *  + Nếu (a*a == b*b + c*c) || (b*b == a*a + c*c) || (c*c == a*a + b*b) => Tam giác vuông
 ** Đầu ra: Thông báo kết quả
 */

document.getElementById("btnTinh").onclick = function () {
  var a = document.getElementById("txtcanhThuNhat").value * 1;
  var b = document.getElementById("txtcanhThuHai").value * 1;
  var c = document.getElementById("txtcanhThuBa").value * 1;
  var result;
  if (a == b && a == c && b == c) {
    result = "Đây là tam giác đều";
  } else if (a == b || a == c || b == c) {
    result = "Đây là tam giác cân";
  } else if (
    a * a == b * b + c * c ||
    b * b == a * a + c * c ||
    c * c == a * a + b * b
  ) {
    result = "Đây là tam giác vuông";
  }
  document.getElementById("footerTamGiac").innerHTML = result;
  document.getElementById("footerTamGiac").style.color = "red";
  document.getElementById("footerTamGiac").style.fontSize = "20px";
};
