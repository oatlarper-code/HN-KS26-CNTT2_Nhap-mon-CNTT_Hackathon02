const danhSachBangGia = [
  { ma: "XE-500", ten: "Xe tai 500 kg", gia: 600000 },
  { ma: "XE-1T", ten: "Xe tai 1 tan", gia: 800000 },
  { ma: "XE-2T", ten: "Xe tai 2 tan", gia: 1200000 },
  { ma: "TRON-GOI", ten: "Chuyen tron goi", gia: 2400000 },
];

function hienThiGoiChuyen() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiGoiChuyen();
