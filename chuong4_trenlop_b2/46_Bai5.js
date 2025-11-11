daoNguoc = (A) => {
    let B = [];
    for (let i = A.length - 1; i >= 0; i--) {
        B.push(A[i]);
    }
    return B;
}

inKQ = (B) => {
    console.log(B);
}


let A = [1, 2, 3, 4, 5]
inKQ(daoNguoc(A));
