//hàm filter
const numbers1 = [1, 2, 3, 4, 5, 6];
// Lọc ra các số chẵn
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log('filter', evenNumbers); // Output: [2, 4, 6]


//hàm some
const numbers = [1, 2, 3, 4, 5];
// Kiểm tra xem mảng có số lẻ nào không
const hasOddNumber = numbers.some(num => num % 2 !== 0);
console.log('some', hasOddNumber); // Output: true

//hàm every
const numbereverys = [1, 2, 3, 4, 5];
// Kiểm tra xem tất cả các số đều lớn hơn 0 hay không
const allPositive = numbereverys.every(num => num > 0);
console.log('every', allPositive); // Output: true


//hàm map
const numbermaps = [1, 2, 3, 4, 5];
// Nhân mỗi phần tử trong mảng lên 2
const doubledNumbers = numbermaps.map(num => num * 2);
console.log('map', doubledNumbers); // Output: [2, 4, 6, 8, 10]

//hàm reduce
const numberreduces = [1, 2, 3, 4, 5];
// Tính tổng của tất cả các phần tử trong mảng
const sum = numberreduces.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('reduce', sum); // Output: 15

//hàm find
const numberfinds = [1, 2, 3, 4, 5];
// Tìm số lớn hơn 3 đầu tiên
const foundNumber = numberfinds.find(num => num > 3);
console.log('find', foundNumber); // Output: 4