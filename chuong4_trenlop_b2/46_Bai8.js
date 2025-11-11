soLe = (A) => {
    let B = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 !== 0) {
            B.push(A[i]*2);
        }
    }
    return B;
}
inKQ = (B) => {
    console.log(B);
}


let A =  [1, 2, 3, 4, 5, 6, 7, 8, 9]
inKQ(soLe(A));