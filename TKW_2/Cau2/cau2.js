
        function changeBackground(color, colorName) {
            document.body.style.backgroundColor = color;
            var noti = document.getElementById("notification");
            noti.innerText = "Bạn đã chọn màu " + colorName;
        }

        function resetBackground() {
            document.body.style.backgroundColor = "white";
            document.getElementById("notification").innerHTML = ""; // Chỉ ẩn, không xóa
        }

