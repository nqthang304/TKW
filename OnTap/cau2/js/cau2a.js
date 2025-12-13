buttonDo = () => {
    document.getElementsByTagName("body")[0].style.backgroundColor = 'red';
    document.getElementsByClassName("thongbao")[0].innerHTML="Bạn đã chọn màu red";
}

buttonXanhla= () => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "green";
    document.getElementsByClassName("thongbao")[0].innerHTML="Bạn đã chọn màu green";
}

buttonXanhDuong = () => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
    document.getElementsByClassName("thongbao")[0].innerHTML="Bạn đã chọn màu blue";
}

buttonVang = () => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("thongbao")[0].innerHTML="Bạn đã chọn màu yellow";
}

buttonTim= () => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "purple";
    document.getElementsByClassName("thongbao")[0].innerHTML="Bạn đã chọn màu purple";
}

reset = () => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByClassName("thongbao")[0].innerHTML="";
}