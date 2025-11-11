LaSNT = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

demSNT = (m) => {
    let count = 0;
    for (let i = 2; i < m.length; i++) {
        if (LaSNT(i)) {
            count++;
        }
    }
    return count;
}

inKQ = (count) => {
    console.log("co " + count+" SNT");
}

let A = [9,8,5,6,2,13]
demSNT(A);
let count = demSNT(A);
inKQ(count);