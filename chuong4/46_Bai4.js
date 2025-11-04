let year = 2024;
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    console.log(year + " la nam nhuan");
}
else {
    console.log(year + " khong phai nam nhuan");
}