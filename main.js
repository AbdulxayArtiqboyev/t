// {
//     // masala 1
//     function myFunc (a){
//         let birlik = Math.floor(a / 100)
//         let onlik = Math.floor( a / 10 % 10)
//         let yuzlik = a % 10;
//         console.log(yuzlik,onlik,birlik);
//         return ''
//     }
//     console.log(myFunc(345));
// }

// {
//     // masala 2
//     function myFunc (a){
//         let result = 1
//         for(let i = 2; i <= a;i++){
//             result *= i
            
//         }
//         console.log(`faktoryal: ${result}`);
        
        
         
//     }
//     myFunc(5)
// }

// {
//     // masala 3
//     function myFunc (a,b){
//         let person1 = {name: "Abu", age: 30};
//         let person2 = {name: "Bobur", age: 25};
//         if(person1.age > person2.age){
//             console.log(person1);
//         }
//         else{
//             console.log(person2);
//         }
//         return a , b
        

//     }
//     myFunc()

// }

// {
//     // masala 4
//     function myFunc (a){

//         if(a < 1) return;
//             myFunc(a - 1)
//                 console.log(a);
//     }
//     myFunc(19)
// }

// {
//     // masala 5
//     let user = {name: "Shaxzod"};
// let age = {age: 25};
// let userJob = {job: "Developer"};

// let result = {...user, ...age, ...userJob};

// console.log(result);
// }

// {
//     // masala 6
//     let salaries = {
//         aXodim: 150,
//         bXodim: 180,
//         cXodim: 210
//       };
      
//       function myFunc(salaries) {
//         let total = 0;
//         for (let key in salaries) {
//           total += salaries[key];
//         }
//         return total;
//       }
      
//       console.log(myFunc(salaries)); // Output: 540
      
// }

// {
//     // masala 7
//     let numbers = [1, 2, 3, 4, 5]; 

// function max(arr) {
//   return Math.max(...arr);
// }

// console.log(max(numbers)); 

// }
// {
//     // masala 8
//     let arr = [2, 4, 6, 7, true, false, null, undefined];

//     function sumArray(arr) {
//       let sum = 0;
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === undefined) {
//           arr[i] = 0; // Replace undefined with 0
//         }
//         if (typeof arr[i] === 'number') {
//           sum += arr[i]; // Add only numeric values to the sum
//         }
//       }
//       return sum;
//     }
    
//     console.log(sumArray(arr)); 
    

// }

// 2 topshiriq
// {
//     // masala 1
//     let arr = [
//         {
//           name: "Abdulloh",
//           age: 21,
//           status: false
//         },
//         {
//           name: "Botir",
//           age: 18,
//           status: true
//         },
//         {
//           name: "Shokir",
//           age: 12,
//           status: false
//         }
//       ];
      
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i].status === false) {
//           console.log(arr[i]);
//         }
//       }
      
// }

// {
//     // masala 2
//     function myFunc(n) {
//         let sum = 0;
//         for (let i = 1; i <= n; i++) {
//           sum += i;
//         }
//         return sum;
//       }

//       let inputNumber = 5; 
//       console.log(myFunc(inputNumber)); 
      
// }

// {
//     // masala 3
//     function countDuplicates(arr) {
//         let counts = {};
//         let duplicatesCount = 0;
      
//         for (let i = 0; i < arr.length; i++) {
//           if (counts[arr[i]]) {
//             counts[arr[i]] += 1;
//           } else {
//             counts[arr[i]] = 1;
//           }
//         }
      
//         for (let key in counts) {
//           if (counts[key] > 1) {
//             duplicatesCount++;
//           }
//         }
      
//         return duplicatesCount;
//       }
      
//       console.log(countDuplicates(arr));
// }

// {
//     // masala 4
//     let arr1 = [1, 3, 5, 7, 9];
// let arr2 = [0, 2, 4, 5, 6, 7, 8, 9];

// function findLargestCommonValue(arr1, arr2) {
//   let commonValues = [];
  
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       commonValues.push(arr1[i]);
//     }
//   }

//   if (commonValues.length === 0) {
//     return null; 
//   }

//   let maxCommonValue = commonValues[0];
//   for (let i = 1; i < commonValues.length; i++) {
//     if (commonValues[i] > maxCommonValue) {
//       maxCommonValue = commonValues[i];
//     }
//   }

//   return maxCommonValue;
// }

// console.log(findLargestCommonValue(arr1, arr2)); 

// }
// {
//     // masala 5
//     function printNumbers(n) {
//         for (let i = 1; i <= n; i++) {
//           console.log(i);
//         }
//       }
      
//       // Example usage:
//       let inputNumber = 7;
//       printNumbers(inputNumber); 
      
// }