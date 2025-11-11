reverse_sort = (A) => {
    let B = A.sort((a, b) => b - a);
    return B;
}

inKQ = (B) => {
    console.log("Số lớn thứ hai là:",B[1]);
}
let A = [10, 5, 8, 12, 15, 7]
inKQ(reverse_sort(A));