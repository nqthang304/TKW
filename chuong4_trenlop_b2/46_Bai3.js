checkfc = (A)   => {
    for (let i = 0; i < A.length; i++) {
        if (A[i]=="apple") {
            return true;
        }
    }
}

inKQ = (A) => {
    if (checkfc(A)) {
        console.log("Apple có trong mảng.");
    }
    else {
        console.log("Apple không có trong mảng.");
    }
}

let A =["banana", "orange", "apple", "mango"] 
inKQ(A);