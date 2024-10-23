// Q1) sum of natural numbers from 1 to n ? 
function sumofnaturalNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumofnaturalNumber(10));

//Q2) number is palindrome or not
var palindrome = function (x) {
    let copynum = x, reversenum = 0;

    while (copynum > 0) {
        const lastdigit = copynum % 10;
        reversenum = reversenum * 10 + lastdigit;

        copynum = Math.floor(copynum / 10)
    }

    return x === reversenum;
}
console.log(palindrome(8));

// Q3) fibonacci number 
var fib = function* (n) {
    if (n >= 1) yield 0; // Base case for fib(1)
    if (n >= 2) yield 1; // Base case for fib(2)

    let prev = 0, current = 1;
    for (let i = 2; i < n; i++) {
        let next = prev + current; // Calculate the next Fibonacci number
        yield next; // Yield the next Fibonacci number
        prev = current; // Update previous
        current = next; // Update current
    }
}

// Example Usage
const fibonacciGenerator = fib(5);
for (let num of fibonacciGenerator) {
    console.log(num); // Output: 0, 1, 1, 2, 3
}

// Q4) find missing numbers
var missingNumber = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    return nums.length * (nums.length + 1) / 2 - sum;
}


//Q) how to add an two array
arr1 = [1, 2, "sufi"]
arr2 = [5, 6, "sakki"]

// const newArr = [...arr1, 1,2,3];
const newArr = [...arr1, ...arr2]

console.log(newArr);

// two check two array equal or not 
// if length of two arrays are same then in that scenario are equal
const isArrayEqual = (arr3, arr4) => {
    if (arr3.length !== arr4.length) {
        return false;
    }
    // Then, check if all elements are the same
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] !== arr4[i]) {
            return false; // Return false if any element is different
        }
    }

    return true;
}

console.log(isArrayEqual([1, 2], [1, 2]));


// how to sort an array in ascending and descending order
const x = [1, 3, 5, 7, 9, -1]
x.sort()
console.log(x);

x.sort((a, b) => b - a)
console.log(x);

//  how to reverse an array
const rev = [1, 3, -5, 7, -9];

console.log(rev.reverse());

//map, filters 
const x1 = [1, -3, 5, -7, 9,]
const newMapArr = x1.map((ele, i) => ele * ele)
console.log(newMapArr);

const positiveNum = x1.filter((ele, i) => ele > 0)
console.log(positiveNum);

//find the index of first occurence in the string

const string = "Hello, world!";
const substring = "world";

const index = string.indexOf(substring);

console.log(index);

// Recursion : when a function calls itself than its called as recursion
function fun(n) {
    if (n == 0) {
        return
    }
    console.log("Hello", n);
    fun(n - 1);
}
fun(4)

function fun2(n, current = 1) {
    if (current > n) {
        return; // Stop when current exceeds n
    }
    console.log("Hello", current);
    fun2(n, current + 1); // Call with incremented current
}

fun2(4); // This will count from 1 to 4

//factorial of a number using recursion...
const factorial = (n) => {
    if (n === 0)
        return 1;

    return n * factorial(n - 1)
}
console.log(factorial(6));


// linear search in javascript 
const l_array = [1, 2, 3, 6, 8, 9]

const linearSearch = (l_array, target) => {
    for (let i = 0; i < l_array.length; i ++) {
        if (l_array[i] === target) {
            return i;
        }
    }
    return "Not Found";
}

console.log(linearSearch(l_array, 2));


//Binary Search in Javascript---everything must be sorted for this search(bubble sort, quick sort etc)
const BinarySearch = (arr,target) =>{
    let start = 0, end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start + end / 2));
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return -1;
}
console.log(BinarySearch([1,2,3,4,5,6,7,8], 6));




