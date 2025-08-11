const arr =  [2, 4, 9, 6, 8, 10]

const name = ["ram","shyam","gita"]

// arr.forEach((num)=>{
//     console.log(num*3)
// })

// name.forEach((n)=>{
//     console.log("Hello, "+n)
// })


const arr2 =  [2, 4, 9, 6, 8, 10]

// const mapRes = arr2.map((num)=>num+4)

// console.log(arr2)
// console.log(mapRes)

const arr3 =  [2, 4, 9, 6, 8, 10]

// const filres = arr3.filter((num)=>{
//      return  num<6;
// })

// console.log(filres)


const arr4 =  [2, 4,2, 4, 6, 7, 0,3]
const resdRes = arr4.reduce((total1, start1)=>{
      return total1+start1 
},0)

console.log(resdRes)