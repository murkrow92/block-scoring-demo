console.log('Maps')

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
// }

// lưu giữ liệu theo kiểu "key-value" 
let mapArr = arr.map((item, index) => {
    return (
        `<td>${item} - ${index}</td>`
    );
})

console.log('check value arr: ', arr)
console.log('check value mapArr: ', mapArr) 