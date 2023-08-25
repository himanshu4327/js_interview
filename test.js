// // A function that takes two numbers and a callback function to perform an operation on them
// function calculate(num1, num2, callback) {
//     const result = num1 + num2;
//     callback(result);
//   }
  
//   // A callback function to log the result
//   function logResult(result) {
//     console.log("The result is:", result);
//   }
  
//   // Using the calculate function with the logResult callback
//   calculate(5, 3, logResult);
  

// ////promise 
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = "Data fetched successfully!";
//         resolve(data); // Resolve the Promise with data
//       }, 1000);
//     });
//   }
  
//   fetchData()
//     .then(data => {
//       console.log(data); // Outputs: "Data fetched successfully!"
//     })
//     .catch(error => {
//       console.error(error);
//     });
  

// //async await
// ///////////
// async function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = "Data fetched successfully!";
//         resolve(data);
//       }, 1000);
//     });
//   }
  

//   async function processData() {
//     try {
//       const data = await fetchData();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   processData();

//   //////
// //   function exampleVar() {
// //     var x = 10;
// //     if (true) {
// //       var x = 20; // This re-declares the 'x' variable
// //       console.log(x); // Outputs 20
// //     }
// //     console.log(x); // Outputs 20
// //   }
  
// //   exampleVar();


//   ////

// //   function exampleLet() {
// //     let y = 10;
// //     if (true) {
// //       let y = 20; // This creates a new 'y' variable scoped to the block
// //       console.log(y); // Outputs 20
// //     }
// //     console.log(y); // Outputs 10
// //   }
  
// //   exampleLet();
  
  


//   //////
// //   function exampleConst() {
// //     const z = 10;
// //     if (true) {
// //       const z = 20; // This creates a new 'z' variable scoped to the block
// //       console.log(z); // Outputs 20
// //     }
// //     console.log(z); // Outputs 10
// //   }
  
// //   exampleConst();
  


// ///clouser
// function outerFunction() {
//     const outerVariable = 'I am from the outer function';
  
//     function innerFunction() {
//       console.log(outerVariable); // The inner function can access outerVariable
//     }
  
//     return innerFunction; // Return the inner function
//   }
  
//   const myClosure = outerFunction(); // myClosure now holds the inner function
  
//   // Even though outerFunction has finished executing, myClosure can still access outerVariable
//   myClosure(); // Outputs: "I am from the outer function"
  


// //   console.log(x); // Outputs: undefined
// // var x = 5;

// var x;
// console.log(x);
// x = 5;

// sayHello(); // Outputs: "Hello, hoisting!"

// function sayHello() {
//   console.log("Hello, hoisting!");
// }


// ///////////
// // A regular function that takes three arguments
// function add(x, y, z) {
//     return x + y + z;
//   }
  
//   // Using currying to create a series of single-argument functions
//   function curriedAdd(x) {
//     return function(y) {
//       return function(z) {
//         return x + y + z;
//       };
//     };
//   }
  
//   // Using the curried function
//   const result = curriedAdd(1)(2)(3); // Returns 6
  
//   console.log(result);
  ///
//   function reverseString(str) {
//     // Step 1: Convert the string to an array of characters
//     const charArray = str.split('');
  
//     // Step 2: Reverse the array
//     const reversedArray = charArray.reverse();
  
//     // Step 3: Join the reversed array back into a string
//     const reversedStr = reversedArray.join('');
  
//     // Step 4: Return the reversed string
//     return reversedStr;
//   }
  
//   // Test the function
//   const inputString = "hello";
//   const reversed = reverseString(inputString);
//   console.log(reversed); // Output: "olleh"
  


  ////////////////
//   function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   // Test the function
//   const inputString = "hello";
//   const reversed = reverseString(inputString);
//   console.log(reversed); // Output: "olleh"
  

  /////
//   function isPalindrome(str) {
//     // Compare the string with its reverse, considering spaces, punctuation, and case
//     return str === str.split('').reverse().join('');
//   }
  
//   // Test the function
//   const inputString = "A man, a plan, a canal, Panama";
//   const result = isPalindrome(inputString);
//   console.log(result); // Output: false
  

  ////
//   function isPalindrome(str) {
//     // Convert the string to lowercase for case-insensitive comparison
//     str = str.toLowerCase();
  
//     // Remove spaces and punctuation
//     str = str.replace(/[^a-z0-9]/g, '');
  
//     // Compare characters from the start and end of the string inward
//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//       if (str[i] !== str[str.length - 1 - i]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // Test the function
//   const inputString = "A man, a plan, a canal, Panama";
//   const result = isPalindrome(inputString);
//   console.log(result); // Output: true
  

  ////
//   function firstNonRepeatingCharacter(str) {
//     const charCount = {};
  
//     // Count the occurrences of each character in the string
//     for (const char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
  
//     // Find the first non-repeating character
//     for (const char of str) {
//       if (charCount[char] === 1) {
//         return char;
//       }
//     }
  
//     return null; // Return null if no non-repeating character is found
//   }
  
//   // Test the function
//   const inputString = "programming";
//   const result = firstNonRepeatingCharacter(inputString);
//   console.log(result); // Output: "p"
  


  /////////////////
  function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanedStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/\s/g, '').toLowerCase();
    
    // Check if the lengths of the cleaned strings are different
    if (cleanedStr1.length !== cleanedStr2.length) {
      return false;
    }
    
    // Create character frequency maps for both strings
    const charCount1 = {};
    const charCount2 = {};
  
    // Populate charCount1 with characters from cleanedStr1
    for (const char of cleanedStr1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
    }
  
    // Populate charCount2 with characters from cleanedStr2
    for (const char of cleanedStr2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
    }
  
    // Compare character frequency maps
    for (const char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test the function
  const word1 = "listen";
  const word2 = "silent";
  const result = areAnagrams(word1, word2);
  console.log(result); // Output: true
  

  ///
  const str1 = "hello";
const fruits = str1.split(" "); // Returns ["apple", "banana", "cherry"]
console.log(fruits)


const str = "apple,banana,cherry";
const fruits1 = str.split(","); // Returns ["apple", "banana", "cherry"]



const str2 = "Hello, World!";
const sliced = str2.slice(0, 5); // Returns "Hello"


/// array question

let a = [1];
let b = [1];
console.log(a==b);
console.log(a===b);

///*********
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// const n = 100; // Change this value to the desired range
// fizzBuzz(n);
///********************************////
// function findMissingNumber(nums) {
//     const n = nums.length;
//     // Calculate the sum of the first N natural numbers
//     const expectedSum = (n * (n + 1)) / 2;

//     // Calculate the actual sum of the elements in the array
//     const actualSum = nums.reduce((acc, num) => acc + num, 0);

//     // The missing number is the difference between the expected and actual sums
//     return expectedSum - actualSum;
// }

// // Example usage:
// const nums = [3, 0, 1];
// const missingNumber = findMissingNumber(nums);
// console.log("The missing number is:", missingNumber); // Output: 2
///////////


// function findMissingNumber(nums) {
//     const n = nums.length;
//     let expectedSum = 0;
//     let actualSum = 0;

//     // Calculate the expected sum of the first N natural numbers
//     for (let i = 1; i <= n; i++) {
//         expectedSum += i;
//     }

//     // Calculate the actual sum of the elements in the array
//     for (let num of nums) {
//         actualSum += num;
//     }

//     // The missing number is the difference between the expected and actual sums
//     return expectedSum - actualSum;
// }

// // Example usage:
// const nums = [3, 0, 1];
// const missingNumber = findMissingNumber(nums);
// console.log("The missing number is:", missingNumber); // Output: 2


/////////////

// function twoSum(nums, target) {
//     const numMap = {}; // Create a hashmap to store values and their indices
    
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]; // Calculate the complement
        
//         // Check if the complement exists in the hashmap
//         if (numMap.hasOwnProperty(complement)) {
//             return [numMap[complement], i]; // Return the indices of the two numbers
//         }
        
//         // Store the current number and its index in the hashmap
//         numMap[nums[i]] = i;
//     }
    
//     return null; // If no such pair is found, return null
// }

// // Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// const result = twoSum(nums, target);

// if (result !== null) {
//     console.log(`Indices of the two numbers that add up to ${target}: [${result}]`);
// } else {
//     console.log(`No two numbers found that add up to ${target}`);
// }

////////

// function findDuplicate(nums) {
//     const numCount = {}; // Create an empty object to store the count of each number.
    
//     for (let i = 0;i<nums.lenght;i++) {
//         if (numCount[i]) {
//             // If the number is already in the hash map, it's a duplicate.
//             return i;
//         }
//         // Otherwise, add the number to the hash map with a count of 1.
//         numCount[i] = 1;
//     }
    
//     // If no duplicate is found, return -1 or any other appropriate value.
//     return -1;
// }

// // Example usage:
// const nums = [3, 1, 3, 4, 2];
// const duplicateNumber = findDuplicate(nums);
// console.log("The duplicate number is:", duplicateNumber);

// 
////
// function maxSubarraySum(nums) {
//     if (nums.length === 0) {
//         return 0; // Handle the case of an empty array
//     }

//     let maxSum = nums[0]; // Initialize maxSum to the first element of the array
//     let currentSum = nums[0]; // Initialize currentSum to the first element

//     for (let i = 1; i < nums.length; i++) {
//         // Choose between extending the current subarray or starting a new one
//         currentSum = Math.max(nums[i], currentSum + nums[i]);

//         // Update the maximum sum if necessary
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     return maxSum;
// }

// // Example usage:
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const maxSum = maxSubarraySum(nums);
// console.log("Maximum contiguous subarray sum:", maxSum); // Output: 6 (subarray [4, -1, 2, 1])


// function rotateArray(nums, k) {
//     const n = nums.length;
//     k = k % n; // Ensure k is within the array length
    
//     const rotated = [];
    
//     // Copy elements from the rotated positions to the new array
//     for (let i = 0; i < n; i++) {
//         const newPosition = (i + k) % n;
//         rotated[newPosition] = nums[i];
//     }
    
//     return rotated;
// }

// // Example usage:
// const inputArray = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// const rotatedArray = rotateArray(inputArray, k);
// console.log(rotatedArray); // Output: [5, 6, 7, 1, 2, 3, 4]


// function reverseArray(arr) {
//     const n = arr.length;
//     let left = 0;
//     let right = n - 1;

//     while (left < right) {
//         // Swap elements at positions left and right
//         const temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;

//         // Move the pointers inward
//         left++;
//         right--;
//     }
// }

// const inputArray = [1, 2, 3, 4, 5, 6, 7];
// reverseArray(inputArray);
// console.log(inputArray); // Output: [7, 6, 5, 4, 3, 2, 1]
// function findMaxAndMin(arr) {
//     if (arr.length === 0) {
//         return null; // Handle the case of an empty array
//     }

//     let max = arr[0];
//     let min = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]; // Update max if a larger element is found
//         } else if (arr[i] < min) {
//             min = arr[i]; // Update min if a smaller element is found
//         }
//     }

//     return { max, min };
// }

// // Example usage:
// const array = [3, 1, 7, -2, 5, 9, 0];
// const result = findMaxAndMin(array);
// console.log("Maximum:", result.max); // Output: 9
// console.log("Minimum:", result.min); // Output: -2


// function findKthMaxAndMin(arr, k) {
//     if (k <= 0 || k > arr.length) {
//         return "Invalid k"; // Handle the case of an invalid k value
//     }

//     const sortedArr = [...arr].sort((a, b) => a - b); // Create a sorted copy of the array
//     const kthMin = sortedArr[k - 1]; // Retrieve the kth minimum element
//     const kthMax = sortedArr[arr.length - k]; // Retrieve the kth maximum element

//     return { kthMin, kthMax };
// }

// // Example usage:
// const array = [3, 1, 7, -2, 5, 9, 0];
// const k = 3;
// const result = findKthMaxAndMin(array, k);
// console.log(`Kth Minimum: ${result.kthMin}`); // Output: Kth Minimum: 1
// console.log(`Kth Maximum: ${result.kthMax}`); // Output: Kth Maximum: 5



// function moveNegativesToLeft(arr) {
//     const n = arr.length;
//     let left = 0;
//     let right = n - 1;

//     while (left <= right) {
//         if (arr[left] < 0 && arr[right] < 0) {
//             // Both elements are negative, move the left pointer to the right
//             left++;
//         } else if (arr[left] >= 0 && arr[right] < 0) {
//             // Left is positive, right is negative, swap them and move both pointers
//             const temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;
//             left++;
//             right--;
//         } else if (arr[left] >= 0 && arr[right] >= 0) {
//             // Both elements are positive, move the right pointer to the left
//             right--;
//         }
//     }
// }

// Example usage:
// const array = [-1, 2, -3, 4, -5, 6, -7];
// moveNegativesToLeft(array);
// console.log(array); // Output: [-1, -3, -5, -7, 4, 6, 2]

function maxProductSubarray(nums) {
    if (nums.length === 0) {
        return 0; // Handle the case of an empty array
    }

    let maxProduct = nums[0]; // Initialize the maximum product
    let minProduct = nums[0]; // Initialize the minimum product (for handling negative numbers)
    let result = nums[0]; // Initialize the result

    for (let i = 1; i < nums.length; i++) {
        // If the current number is negative, swap maxProduct and minProduct
        if (nums[i] < 0) {
            const temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }

        // Update maxProduct and minProduct for the current element
        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);

        // Update the result with the maximum product found so far
        result = Math.max(result, maxProduct);
    }

    return result;
}

// Example usage:
const nums = [2, 3, -2, 4];
const maxProd = maxProductSubarray(nums);
console.log("Maximum product subarray:", maxProd); // Output: 6 (subarray [2, 3])

