tinhTong = (m) => {
    let sum = 0;
    for (let i = 0; i < m.length; i++) {
        sum += m[i];
    }
    return sum;
}

inKQ = (sum) => {
    console.log("Tổng các phần tử trong mảng: " + sum);
}
let A = [1, 2, 3, 4, 5]
inKQ(tinhTong(A));