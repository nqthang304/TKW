let array = [3,5,7,2,8,1,4]
let sln=0
for (let i=0; i<array.length; i++) {
    if (array[i]>sln) {
        sln=array[i];
    }
}
console.log("So lon nhat trong mang la: " + sln);