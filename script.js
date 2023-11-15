
console.log("function method")
   ///function 
// Print odd numbers in an array
var result =[]
function odd(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0) {
            result.push(arr[i])
        }
} 
return result
}
 console.log( odd([1,2,3,4,5,6,7,8,9,]))



 // Sum of all numbers in an array
let array=[1,2,3,4,5]
 function add(arr3){
    let sum = 0
    for(let val of arr3){
        sum += val
    }
    return sum
}
console.log(add(array))



//  to return the median based on primeon the array length

const arr1 = [1,3,5,7];
const arr2 = [2,4,6,8];
function findmedian(arr1, arr2){
    let arr=[...arr1,...arr2]
    arr.sort((a,b)=>a-b);
     let n=arr.length;//
     if(n%2===0){
       return ((arr[n/2]+arr[n/2-1])/2)
     }
     else{ 
        return arr[Math.floor(n/2)]
     }
    }
console.log(findmedian(arr1,arr2))




// Convert all the strings to title caps in a string array

function title(arr0){
        let arr8 = arr0.toString();
         let data8 = arr8.toLowerCase().split(" ");
  for(i=0;i<data8.length;i++){
   data0  = data8[i].charAt(0).toUpperCase() + data8[i].slice(1)
  }
  return data8.join(' ');
}
console.log(title(["this The cOMPuter"]))


    //  Return all the palindromes in an arr
  function palindrom(err){
    let  emt2 = [];
    for(i=0; i<err.length;i++){
     const res = err[i].split("").reverse().join("");
     if(res===err[i]){
      emt2.push(err[i])
     }
    }
return emt2 
  }
console.log(palindrom(["mom","dad","for","hello"]));

//  rorate an array by k time

   function ktime(rotate,k){
    for(var i=0; i<k;i++){
        rotate.push(rotate[i])
    }
    for( var i=0;i<k;i++){
       rotate.shift()
    }   
    return rotate
}

  console.log(ktime([1,2,3,4,5],3))

console.log("annoymous function method")

///annoymous function

// Print odd numbers in an array
var result =[]
let odd1=function odd(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0) {
            result.push(arr[i])
        }
} 
return result
}
 console.log(odd1([1,2,3,4,5,6,7,8,9]))


 // Sum of all numbers in an array
let array1=[1,2,3,4,5]
 let add1= function add(arr3){
   let sum = 0
   for(let val of arr3){
       sum += val
   }
   return sum
}
console.log(add1(array1))

//  to return the median based on primeon the array length

const arr9 = [1,3,5,7];
const arr91 = [2,4,6,8];
let find = function findmedian(arr9, arr91){
    let arr7=[...arr9,...arr91]
    arr7.sort((a,b)=>a-b);
     let n=arr7.length;//
     if(n%2===0){
       return ((arr7[n/2]+arr7[n/2-1])/2)
     }
     else{ 
        return arr7[Math.floor(n/2)]
     }
    }
console.log(find(arr9,arr91))


 let title1= function title(arr0){
    let arr8 = arr0.toString();
     let data8 = arr8.toLowerCase().split(" ");
for(i=0;i<data8.length;i++){
data0  = data8[i].charAt(0).toUpperCase() + data8[i].slice(1)
}
return data8.join(' ');
}
console.log(title1(["this The cOMPuter"]))



    //  Return all the palindromes in an arr
     let pali= function palindrom(err){
        let  emt2 = [];
        for(i=0; i<err.length;i++){
         const res = err[i].split("").reverse().join("");
         if(res===err[i]){
          emt2.push(err[i])
         }
        }
    return emt2 
      }
    console.log(pali(["mom","dad","for","hello"]));

    
//  rorate an array by k time

    let k = function ktime(rotate,k){
    for(var i=0; i<k;i++){
        rotate.push(rotate[i])
    }
    for( var i=0;i<k;i++){
       rotate.shift()
    }   
    return rotate
}

  console.log(k([1,2,3,4,5],3))

console.log("arrow method")

// Print odd numbers in an array
var result =[]
let odd2= (arr)=>{
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0) {
            result.push(arr[i])
        }
} 
return result
}
 console.log(odd2([1,2,3,4,5,6,7,8,9]))


  // Sum of all numbers in an array
let array3=[1,2,3,4,5]
let add2= (arr3)=>{
  let sum = 0
  for(let val of arr3){
      sum += val
  }
  return sum
}
console.log(add2(array1))



//  to return the median based on primeon the array length

const arr92 = [1,3,5,7];
const arr911 = [2,4,6,8];
let finds = (arr92, arr911)=>{
    let arr8=[...arr92,...arr911]
    arr8.sort((a,b)=>a-b);
     let n=arr8.length;//
     if(n%2===0){
       return ((arr8[n/2]+arr8[n/2-1])/2)
     }
     else{ 
        return arr8[Math.floor(n/2)]
     }
    }
console.log(finds(arr92,arr911))


 let title2= (arr0)=>{
    let arr8 = arr0.toString();
     let data8 = arr8.toLowerCase().split(" ");
for(i=0;i<data8.length;i++){
data0  = data8[i].charAt(0).toUpperCase() + data8[i].slice(1)
}
return data8.join(' ');
}
console.log(title(["this The cOMPuter"]))


/// prime number
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  function findPrimeNumbers(arr) {
    return arr.filter(isPrime);
  }
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = findPrimeNumbers(numbers);
  console.log("Prime Numbers:", primeNumbers);
  
  
//----------------------------------------------------------------------------//



