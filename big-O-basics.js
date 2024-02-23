/*WHAT IS AN ALGORITHM*/

// - set of instructions for solving a specific problem

/*WHAT IS BIG O NOTATION USED FOR*/

// - metric for determining the efficiency of an algorithm
// - big O represents an algo's WORST CASE complexity
// - big O defines the runtime required to execute an algo
// // - does this by identifying how the performance of said algo will change as input size grows
// // - does NOT tell you how fast your algo run time is

/*WHAT IS TIME AND SPACE COMPLEXITY*/

// - an algo's TIME COMPLEXITY specifies HOW LONG it will take to execute an algo as a FUNCTION OF ITS INPUT SIZE
// - an algo's SPACE COMPLEXITY specifies the TOTAL AMOUNT OF SPACE OR MEMORY required to execute an algo

/*WHY IS TIME COMPLEXITY A FUNCTION OF ITS INPUT SIZE*/

// - Imagine there's an algo that computes the sum of numbers based on input.
// - If input is 4,

const DESCRIBING_COMPLEXITY_AS_A_FUNCTION_OF_INPUT_SIZE = () => {
  const calculateSum = (input) => {
    let sum = 0;
    for (let i = 0; i <= input; i++) {
      sum += i;
    }
    return sum;
  };
  let ans = calculateSum(4);
  console.log(ans);
  console.log(Math.log2(8));
};
// DESCRIBING_COMPLEXITY_AS_A_FUNCTION_OF_INPUT_SIZE();

//3 statements above, but because there's a loop, the second statement containing the for loop will execute 4 times since input is 4
// this means algo will run (4 + 2) times
// so basically, the algo with run input + 2 times where input can be any number

/* SIX MAJOR TYPES OF COMPLEXITIES */

// listed from best complexity to worst

/* 

- O(1) - Best
- O(log n) - Good
- O(n) - Fair
- O(n log n) - Bad
- O(n^2), O(2^n) - Both horrible
- O(n!) - the worst

*/

/*SCENARIOS TO DEFINE THE COMPLEXITIES*/

// - When the calculation is not dependent on the input size, it is O(1) CONSTANT time which is the best
// - when the input size is reduced by half (i.e binary search) it is LOGARITHMIC O(log n) REMEMBER: Math.log2(8) = 3 where 2 is the base and 3 is exponent. so pretty much how many 2's multiplied together to equal 8
// - when you have a single loop within algo, it is LINEAR O(n) time complexity
// - When you have nested loops within your algo, it is QUADRATIC O(n^2)
// - When the growth rate doubles with each addition to the input, it is EXPONENTIAL O(2^n) time complexity

/*CONSTANT TIME O(1)*/

// - eg if an algo is to return the first element in an array
// - the function only has one execution step therefore it's CONSTANT O(1) time

const CONSTANT_TIME = () => {
  const firstElement = (array) => {
    return array[0];
  };
  let score = [12, 55, 67, 94, 22];
  console.log(firstElement(score));
};
// CONSTANT_TIME();

/*LOGARITHM TIME*/

// - when input size decreases on each iteration or step
// - second best time complexity because the program runs for half the input size at each iteration
// - eg. binary search algo to find the index of a given element in the arr

const LOGARITHMIC_TIME = () => {
  //binary search takes in two params, array and target
  const binarySearch = (array, target) => {
    /*PLAN*/
    // while firstIndex which will start as 0 is less than or equal to the last index which is array.length - 1, IF the middleIndex is ==== target the return the middleIndex... IF middleIndex is greater than target ( the target index is the lower/first half,) last Index will now equal the middleIndex -1. This cuts the search in half and the last index is where middleIndex - 1 used to be. now IF the middleIndex is lesser than the target ( the target index is in the upper half) firstIndex is now middleIndex + 1. This cuts the search in half where middleIndex + 1 used to be.
    // REMEMBER I have to have a return - 1 indicating the target is not present if the loop exits without finding it

    //init firstIndex to zero and lastIndex to array.length - 1
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    //init middle index with that Math.floor((firstIndex + lastIndex) / 2)

    //create the WHILE LOOP
    // whilee first index is less than or equal to lastIndex, keep iterating the loop
    while (firstIndex <= lastIndex) {
      let middleIndex = Math.floor((firstIndex + lastIndex) / 2); // REMEMBER: Math.floor rounds down the result of calculation down to the nearest interger whole numbers >= 0
      //need to declare middleIndex INSIDE WHILE LOOP otherwise I'll get infinite runtime use ctrl + c to stop terminal process
      if (array[middleIndex] === target) {
        return middleIndex;
      } else if (array[middleIndex] > target) {
        lastIndex = middleIndex - 1; // - 1 beecause dont need to include the middleIndex of this search in the next one
        //top half of array is cut out in the next search
      } else if (array[middleIndex] < target) {
        firstIndex = middleIndex + 1; // + 1 because dont need to include the middleIndex of this search in the next one
        //bottom half of array is cut out in the next search
      }
      console.log(array[middleIndex]);
    }
    return -1; //this statement indicates that the target was not present in the given
  };
  let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(binarySearch(score, 9));
};
// LOGARITHMIC_TIME();

/*LINEAR TIME*/

// - eg. if an algo is to return the factorial of any inputted number. This means if you input 5, you loop through and multiply 1 by 2 by 3 by 4 and by 5. output will be 120
// - when a func has an iteration that iterates over an input size of n, (like recursion or for loop) time complexity is LINEAR O(1)

const LINEAR_TIME = () => {
  const calcFactorial = (n) => {
    //init factorial so I can return this once for loop is done
    let factorial = 1;
    //create for loop to iterate starting at  i = 2 for as long as "i" is less than or equal to n
    for (let i = 2; i <= n; i++) {
      factorial = factorial * i;
      //1st iteration factorial = 1 x 2
      //2nd iteration factorial = 2 x 3
      //3rd iteration factorial = 6 x 4
      //4th iteration factorial = 24 x 5
      //return factorial = 120
      console.log(i, factorial);
      // 2, 2
      // 3, 6
      // 4, 24
      // 5, 120
    }
    return factorial;
  };
  let ans = calcFactorial(5);
  console.log(ans);
};
// LINEAR_TIME();

/*QUADRATIC TIME*/

// - nested for loop are terrible because for every iteration of an array, that iteration will go through another set of iterations

const QUADRATIC_TIME = () => {
  const matchElements = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i !== j && array[i] === array[j]) {
          return `Match found at ${i} and ${j}`;
        }
      }
    }
    return "no matches found";
  };
  const words = ["dig", "deg", "dag", "duig", "dig", "dog"];
  console.log(matchElements(words));
};
// QUADRATIC_TIME();

/*EXPONENTIAL TIME*/

// - this is when the growth rate doubles with each added input (n)
// - FIBONACCI SEQUENCE RECURSIVE is an example of this, terrible time complexity O(2^n)

// - fibonacci sequence is a math sequence where each number is the sum of the previous two numbers eg. 0, 1, 1, 2, 3, 5, 8, 13

const EXPONENTIAL_TIME = () => {
  const recursiveFibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    let fiboIterations = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);

    return fiboIterations;
  };
  console.log(recursiveFibonacci(6)); // 8
};
EXPONENTIAL_TIME();
