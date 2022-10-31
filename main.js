//bt1
function timSonguyennn() {
    var tong = 0;
    for (var i = 0; i < 10000; i++) {
        tong += i;
        if (tong > 10000) {
            document.getElementById("infoSonguyennn").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
            return;
        }
    }
}

// bt2
function tinhTong() {
    var soXbt2 = document.getElementById("soXbt2").value * 1;
    var soNbt2 = document.getElementById("soNbt2").value * 1;
    var tong = 0;
    for (var i = 1; i <= soNbt2; i++) {
        tong += Math.pow(soXbt2, i);
    }
    document.getElementById("infoTinhtong").innerHTML = "Tổng: " + tong;
}

// bt3
function tinhGiaithua() {
    var soNbt3 = document.getElementById("soNbt3").value * 1;
    var giaiThua = 1;
    for (var i = 1; i <= soNbt3; i++) {
        giaiThua *= i;
    }
    document.getElementById("infotinhGiaithua").innerHTML = "Giai thừa: " + giaiThua;
}

// bt4
function addDiv() {
    var divLe = "<div style='background-color:blue;color:white'>div lẻ</div>";
    var divChan = "<div style='background-color:red;color:white'>div chẵn</div>";
    var rs = "";
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            rs += divLe;
        } else {
            rs += divChan;
        }
    }
    document.getElementById("infoaddDiv").innerHTML = rs;
}