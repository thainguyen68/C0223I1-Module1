function changemoney() {
    let money = document.getElementById("money").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (from == to) {
        result = "result=" + money + from
    } else {
        if (from == "vnd") {
            result = "result=" + money / 23000
        } else {
            result = "result=" + money * 23000
        }
    }
    document.getElementById("result").innerHTML = result;
}
