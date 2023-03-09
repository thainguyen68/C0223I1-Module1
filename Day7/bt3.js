function congA() {
    let numA = +document.getElementById("numA").value;
    let numB = +document.getElementById("numB").value;

    let c = numA + numB;
    document.getElementById("result").innerHTML = c;
}
function truA() {
    let numA = +document.getElementById("numA").value;
    let numB = +document.getElementById("numB").value;

    let d = numA - numB;
    document.getElementById("result").innerHTML = d;
}
function nhanA() {
    let numA = +document.getElementById("numA").value;
    let numB = +document.getElementById("numB").value;

    let e = numA * numB;
    document.getElementById("result").innerHTML = e;
}
function chiaA() {
    let numA = +document.getElementById("numA").value;
    let numB = +document.getElementById("numB").value;

    let f = numA / numB;
    document.getElementById("result").innerHTML = f;
}



//ngày hôm nay là thứ mấy
// switch (new Date().getDay()) {
//     case 0:
//         day = "Chủ Nhật";
//         break;
//     case 1:
//         day = "Thứ hai";
//         break;
//     case 2:
//         day = "Thứ ba";
//         break;
//     case 3:
//         day = "Thứ tư";
//         break;
//     case 4:
//         day = "Thứ năm";
//         break;
//     case 5:
//         day = "Thứ sáu";
//         break;
//     case 6:
//         day = "Thứ bảy";
//         break;
// }
// document.write(day);