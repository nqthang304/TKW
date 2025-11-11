checkfc = (n) => {
    if (n%2 === 0) {
        return true;
    }
    return false;
}

inKQ = (n) => {
    if (checkfc(n)) {
        console.log(n,"là số chẵn");
    }
    else {
        console.log(n,"là số lẻ");
    }
}

let n = 2;
inKQ(n);