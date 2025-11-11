let a=3,b=4,c=5;
if (a===b && b===c) {
    console.log("Tam giac deu");
}
else if (a===b || b===c || a===c) {
    console.log("Tam giac can");
}
else if (a*a + b*b === c*c || a*a + c*c === b*b || b*b + c*c === a*a) {
    console.log("Tam giac vuong");
}
else {
    console.log("Tam giac thuong");
}