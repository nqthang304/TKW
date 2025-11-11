LaSNT = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

inKQ = (n) => {
    if (LaSNT(n)) {
        console.log(n + " là số nguyên tố");
    }
    else {
        console.log(n + " không phải là số nguyên tố");
    }
}
let n = 29;
inKQ(n);