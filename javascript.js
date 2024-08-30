Here are 100 JavaScript coding challenges where you are provided with some initial code, and your task is to apply methods or modify the code to achieve the desired output:

Strings
Reverse a String
javascript
Copy code
let str = "Hello";
// Apply a method to reverse the string.

Convert String to Uppercase
javascript
Copy code
let str = "javascript";
// Apply a method to convert the string to uppercase.

Convert String to Lowercase

javascript
Copy code
let str = "JAVASCRIPT";
// Apply a method to convert the string to lowercase.

Capitalize the First Letter of Each Word

javascript
Copy code
let str = "hello world";
// Apply a method to capitalize the first letter of each word.

Check if String Contains a Substring

javascript
Copy code
let str = "Hello, world!";
let substring = "world";
// Apply a method to check if the string contains the substring.

Replace Spaces with Hyphens

javascript
Copy code
let str = "Hello World";
// Apply a method to replace all spaces with hyphens.

Extract a Substring

javascript
Copy code
let str = "Hello, world!";
// Apply a method to extract the word "world" from the string.

Find the Index of a Character

javascript
Copy code
let str = "Hello, world!";
// Apply a method to find the index of the letter 'w'.

Split a String into an Array

javascript
Copy code
let str = "apple, banana, cherry";
// Apply a method to split the string into an array.

Join an Array into a String

javascript
Copy code
let arr = ["apple", "banana", "cherry"];
// Apply a method to join the array elements into a single string.

Trim Whitespace from a String

javascript
Copy code
let str = "  Hello, world!  ";
// Apply a method to trim the whitespace from both ends of the string.

Repeat a String

javascript
Copy code
let str = "Hello";
// Apply a method to repeat the string 3 times.

Check if String Starts with a Specific Character

javascript
Copy code
let str = "Hello, world!";
// Apply a method to check if the string starts with "Hello".

Check if String Ends with a Specific Character

javascript
Copy code
let str = "Hello, world!";
// Apply a method to check if the string ends with "world!".

Count the Number of Characters in a String

javascript
Copy code
let str = "Hello, world!";
// Apply a method to count the number of characters in the string.

Count the Number of Words in a String

javascript
Copy code
let str = "The quick brown fox";
// Apply a method to count the number of words in the string.

Reverse Each Word in a Sentence

javascript
Copy code
let sentence = "Hello World";
// Apply a method to reverse each word in the sentence.

Remove a Specific Character from a String

javascript
Copy code
let str = "Hello, world!";
// Apply a method to remove all exclamation marks from the string.

Check if a String is a Palindrome

javascript
Copy code
let str = "madam";
// Apply a method to check if the string is a palindrome.

Find the Longest Word in a Sentence

javascript
Copy code
let sentence = "The quick brown fox jumps over the lazy dog";
// Apply a method to find the longest word in the sentence.

Arrays
Sort an Array of Numbers in Ascending Order

javascript
Copy code
let numbers = [10, 5, 8, 1, 7];
// Apply a method to sort the array in ascending order.

Sort an Array of Numbers in Descending Order

javascript
Copy code
let numbers = [10, 5, 8, 1, 7];
// Apply a method to sort the array in descending order.

Find the Maximum Number in an Array

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
// Apply a method to find the maximum number in the array.

Find the Minimum Number in an Array

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
// Apply a method to find the minimum number in the array.

Sum All Numbers in an Array

javascript
Copy code
let numbers = [10, 20, 30, 40];
// Apply a method to sum all the numbers in the array.

Filter Even Numbers from an Array

javascript
Copy code
let numbers = [1, 2, 3, 4, 5, 6];
// Apply a method to filter out even numbers from the array.

Filter Odd Numbers from an Array

javascript
Copy code
let numbers = [1, 2, 3, 4, 5, 6];
// Apply a method to filter out odd numbers from the array.

Remove Duplicates from an Array

javascript
Copy code
let numbers = [1, 2, 2, 3, 4, 4, 5];
// Apply a method to remove duplicates from the array.

Find the Index of an Element in an Array

javascript
Copy code
let numbers = [10, 20, 30, 40];
// Apply a method to find the index of the number 30 in the array.

Check if an Array Contains a Specific Value

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
// Apply a method to check if the array contains the number 3.

Merge Two Arrays

javascript
Copy code
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Apply a method to merge the two arrays into one.

Flatten a Nested Array

javascript
Copy code
let arr = [1, [2, 3], [4, 5]];
// Apply a method to flatten the nested array.

Find Common Elements Between Two Arrays

javascript
Copy code
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
// Apply a method to find common elements between the two arrays.

Remove a Specific Element from an Array

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];   sol - filter method numbers.filter(number => number !== 3);
// Apply a method to remove the number 3 from the array.

Concatenate Two Arrays

javascript
Copy code  solution - concat method 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Apply a method to concatenate the two arrays.

Reverse an Array

javascript
Copy code                   solution - reverse()
let arr = [1, 2, 3, 4, 5];
// Apply a method to reverse the array.

Find the Length of an Array

javascript             solution - array.length
Copy code
let arr = [1, 2, 3, 4, 5];
// Apply a method to find the length of the array.

Insert an Element at a Specific Position in an Array

javascript             solution - array.splice(index,remove-element if want else set to 0,add-number)
Copy code
let arr = [1, 2, 4, 5];
// Apply a method to insert the number 3 at the 3rd position in the array.

Remove the First Element from an Array

javascript
Copy code        solution - shift() method
let arr = [1, 2, 3, 4, 5];
// Apply a method to remove the first element from the array.

Remove the Last Element from an Array

javascript              solution - pop() method 
Copy code
let arr = [1, 2, 3, 4, 5];
// Apply a method to remove the last element from the array.

Find the Difference Between Two Arrays

javascript               solution - step 1 find diff-1 with filter arr1 with include(arr2)
Copy code                           step 2 find diff-2 filter arr2 with include(arr1)
                                    step 3 concat both diff
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
// Apply a method to find the difference between the two arrays.

Find the Union of Two Arrays

javascript
Copy code              solution - [...new Set([...arr1,...arr2])] 
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
// Apply a method to find the union of the two arrays.

Find the Intersection of Two Arrays

javascript              sol- arr1.filter(value => arr2.includes(value));
Copy code
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
// Apply a method to find the intersection of the two arrays.

Find the First Duplicate in an Array

javascript
Copy code
let arr = [1, 2, 3, 2, 4];
// Apply a method to find the first duplicate in the array.

Find the First Non-Repeated Element in an Array

javascript
Copy code
let arr = [1, 2, 2, 3, 3, 4];
// Apply a method to find the first non-repeated element in the array.

Convert an Array to a Set

javascript
Copy code
let arr = [1, 2, 3, 3, 4];
// Apply a method to convert the array to a Set.

Convert a Set to an Array

javascript
Copy code
let set = new Set([1, 2, 3]);
// Apply a method to convert the Set to an array.

Check if All Elements in an Array are Even

javascript
Copy code
let numbers = [2, 4, 6, 8];
// Apply a method to check if all elements in the array are even.

Check if Any Element in an Array is Odd

javascript
Copy code
let numbers = [2, 4, 6, 8];
// Apply a method to check if any element in the array is odd.

Find the Sum of Even Numbers in an Array

javascript
Copy code
let numbers = [1, 2, 3, 4, 5, 6];
// Apply a method to find the sum of all even numbers in the array.
Objects

Access a Property in an Object

javascript
Copy code
let person = { name: "John", age: 30 };
// Apply a method to access the 'name' property in the object.

Add a Property to an Object

javascript
Copy code
let person = { name: "John", age: 30 };
// Apply a method to add a 'city' property to the object.

Delete a Property from an Object

javascript
Copy code
let person = { name: "John", age: 30, city: "New York" };
// Apply a method to delete the 'city' property from the object.

Check if an Object has a Specific Property

javascript
Copy code
let person = { name: "John", age: 30 };
// Apply a method to check if the object has an 'age' property.

Iterate Over an Object's Properties

javascript
Copy code
let person = { name: "John", age: 30 };
// Apply a method to iterate over the object's properties.

Clone an Object

javascript
Copy code
let person = { name: "John", age: 30 };
// Apply a method to clone the object.

Merge Two Objects

javascript
Copy code
let obj1 = { name: "John" };
let obj2 = { age: 30 };
// Apply a method to merge the two objects.

Find the Length of an Object

javascript
Copy code
let person = { name: "John", age: 30, city: "New York" };
// Apply a method to find the number of properties in the object.

Convert an Object to an Array of Keys

javascript
Copy code
let person = { name: "John", age: 30, city: "New York" };
// Apply a method to convert the object to an array of keys.

Convert an Object to an Array of Values

javascript
Copy code
let person = { name: "John", age: 30, city: "New York" };
// Apply a method to convert the object to an array of values.

Convert an Array of Pairs to an Object

javascript
Copy code
let pairs = [["name", "John"], ["age", 30]];
// Apply a method to convert the array of pairs to an object.

Freeze an Object

javascript
Copy code
let person = { name: "John", age: 30 };
// Apply a method to freeze the object.

Check if an Object is Frozen

javascript
Copy code
let person = Object.freeze({ name: "John", age: 30 });
// Apply a method to check if the object is frozen.

Prevent Extensions on an Object

javascript
Copy code
let person = { name: "John", age: 30 };
// Apply a method to prevent extensions on the object.

Check if an Object is Extensible

javascript
Copy code
let person = Object.preventExtensions({ name: "John", age: 30 });
// Apply a method to check if the object is extensible.

Seal an Object

javascript
Copy code
let person = { name: "John", age: 30 };
// Apply a method to seal the object.

Check if an Object is Sealed

javascript
Copy code
let person = Object.seal({ name: "John", age: 30 });
// Apply a method to check if the object is sealed.

Convert an Object to a JSON String

javascript
Copy code
let person = { name: "John", age: 30 };
// Apply a method to convert the object to a JSON string.

Parse a JSON String to an Object

javascript
Copy code
let jsonString = '{"name":"John","age":30}';
// Apply a method to parse the JSON string to an object.

Get All Keys of an Object

javascript
Copy code
let person = { name: "John", age: 30, city: "New York" };
// Apply a method to get all keys of the object.

Get All Values of an Object

javascript
Copy code
let person = { name: "John", age: 30, city: "New York" };
// Apply a method to get all values of the object.

Get an Object's Entries as an Array

javascript
Copy code
let person = { name: "John", age: 30, city: "New York" };
// Apply a method to get the object's entries as an array.

Access a Nested Property in an Object

javascript
Copy code
let person = { name: "John", address: { city: "New York", zip: "10001" } };
// Apply a method to access the 'city' property inside the 'address' object.

Check if Two Objects are Equal

javascript
Copy code
let obj1 = { name: "John", age: 30 };
let obj2 = { name: "John", age: 30 };
// Apply a method to check if the two objects are equal.

Sum All Numeric Properties in an Object

javascript
Copy code
let obj = { a: 10, b: 20, c: "hello" };
// Apply a method to sum all numeric properties in the object.
Numbers

Generate a Random Number Between 0 and 1

javascript
Copy code
// Apply a method to generate a random number between 0 and 1.

Generate a Random Integer Between Two Values

javascript
Copy code
let min = 5;
let max = 10;
// Apply a method to generate a random integer between min and max.

Round a Number to the Nearest Integer

javascript
Copy code
let num = 4.7;
// Apply a method to round the number to the nearest integer.

Round a Number Up to the Next Largest Integer

javascript
Copy code
let num = 4.2;
// Apply a method to round the number up to the next largest integer.

Round a Number Down to the Next Smallest Integer

javascript
Copy code
let num = 4.8;
// Apply a method to round the number down to the next smallest integer.

Find the Square Root of a Number

javascript
Copy code
let num = 16;
// Apply a method to find the square root of the number.

Find the Absolute Value of a Number

javascript
Copy code
let num = -10;
// Apply a method to find the absolute value of the number.

Find the Maximum Value in a Set of Numbers

javascript
Copy code
let numbers = [10, 20, 30, 5];
// Apply a method to find the maximum value in the set of numbers.

Find the Minimum Value in a Set of Numbers

javascript
Copy code
let numbers = [10, 20, 30, 5];
// Apply a method to find the minimum value in the set of numbers.

Convert a String to an Integer

javascript
Copy code
let str = "123";
// Apply a method to convert the string to an integer.

Convert a String to a Floating Point Number

javascript
Copy code
let str = "123.45";
// Apply a method to convert the string to a floating point number.

Check if a Value is a Number

javascript
Copy code
let value = "123";
// Apply a method to check if the value is a number.

Convert a Number to a String

javascript
Copy code
let num = 123;
// Apply a method to convert the number to a string.

Format a Number with Two Decimal Places

javascript
Copy code
let num = 123.456;
// Apply a method to format the number with two decimal places.

Check if a Number is Even

javascript
Copy code
let num = 4;
// Apply a method to check if the number is even.

Check if a Number is Odd

javascript
Copy code
let num = 5;
// Apply a method to check if the number is odd.

Calculate the Power of a Number

javascript
Copy code
let base = 2;
let exponent = 3;
// Apply a method to calculate the power of the number.

Find the Remainder of Division

javascript
Copy code
let dividend = 10;
let divisor = 3;
// Apply a method to find the remainder of the division.

Calculate the Sum of an Array of Numbers

javascript
Copy code
let numbers = [10, 20, 30];
// Apply a method to calculate the sum of the array of numbers.

Calculate the Average of an Array of Numbers

javascript
Copy code
let numbers = [10, 20, 30];
// Apply a method to calculate the average of the array of numbers.

Find the Largest Number in an Array

javascript
Copy code
let numbers = [10, 20, 30, 5];
// Apply a method to find the largest number in the array.

Find the Smallest Number in an Array

javascript
Copy code
let numbers = [10, 20, 30, 5];
// Apply a method to find the smallest number in the array.

Sort an Array of Numbers in Ascending Order

javascript
Copy code
let numbers = [30, 10, 20];
// Apply a method to sort the array of numbers in ascending order.

Sort an Array of Numbers in Descending Order

javascript
Copy code
let numbers = [30, 10, 20];
// Apply a method to sort the array of numbers in descending order.

Find the Greatest Common Divisor (GCD) of Two Numbers javascript let a = 8; let b = 12; // Apply a method to find the greatest common divisor (GCD) of the two numbers.






Here are some JavaScript coding challenge questions where a function is provided, and you need to apply the correct method or logic to get the desired output:

Reverse a String

javascript
Copy code
function reverseString(str) {
    // Apply a method to reverse the string.
    return str;
}

console.log(reverseString("hello")); // Output: "olleh"

Check if a String is a Palindrome

javascript
Copy code
function isPalindrome(str) {
    // Apply a method to check if the string is a palindrome.
    return false;
}

console.log(isPalindrome("racecar")); // Output: true

Find the Maximum Value in an Array

javascript
Copy code
function findMax(arr) {
    // Apply a method to find the maximum value in the array.
    return -1;
}

console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
Sum All Numbers in an Array

javascript
Copy code
function sumArray(arr) {
    // Apply a method to sum all the numbers in the array.
    return 0;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
Check if All Elements in an Array are Even

javascript
Copy code
function areAllEven(arr) {
    // Apply a method to check if all elements are even.
    return false;
}

console.log(areAllEven([2, 4, 6, 8])); // Output: true
Filter Odd Numbers from an Array

javascript
Copy code
function filterOdds(arr) {
    // Apply a method to filter out odd numbers from the array.
    return [];
}

console.log(filterOdds([1, 2, 3, 4, 5])); // Output: [2, 4]
Find the Length of the Longest Word in a String

javascript
Copy code
function findLongestWord(str) {
    // Apply a method to find the length of the longest word in the string.
    return 0;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: 6
Capitalize the First Letter of Each Word

javascript
Copy code
function capitalizeWords(str) {
    // Apply a method to capitalize the first letter of each word in the string.
    return str;
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"
Flatten a Nested Array

javascript
Copy code
function flattenArray(arr) {
    // Apply a method to flatten the nested array.
    return arr;
}

console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]
Remove Duplicates from an Array

javascript
Copy code
function removeDuplicates(arr) {
    // Apply a method to remove duplicates from the array.
    return arr;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]
Count the Number of Vowels in a String

javascript
Copy code
function countVowels(str) {
    // Apply a method to count the number of vowels in the string.
    return 0;
}

console.log(countVowels("hello world")); // Output: 3
Convert a String to Title Case

javascript
Copy code
function toTitleCase(str) {
    // Apply a method to convert the string to title case.
    return str;
}

console.log(toTitleCase("hello world")); // Output: "Hello World"
Find the Factorial of a Number

javascript
Copy code
function factorial(n) {
    // Apply a method to find the factorial of the number.
    return 1;
}

console.log(factorial(5)); // Output: 120
Check if a Number is Prime

javascript
Copy code
function isPrime(num) {
    // Apply a method to check if the number is prime.
    return false;
}

console.log(isPrime(7)); // Output: true
Find the GCD of Two Numbers

javascript
Copy code
function findGCD(a, b) {
    // Apply a method to find the greatest common divisor (GCD) of two numbers.
    return 1;
}

console.log(findGCD(8, 12)); // Output: 4
Merge Two Sorted Arrays

javascript
Copy code
function mergeArrays(arr1, arr2) {
    // Apply a method to merge the two sorted arrays into one sorted array.
    return [];
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
Check if Two Strings are Anagrams

javascript
Copy code
function areAnagrams(str1, str2) {
    // Apply a method to check if the two strings are anagrams of each other.
    return false;
}

console.log(areAnagrams("listen", "silent")); // Output: true
Generate Fibonacci Sequence up to N Terms

javascript
Copy code
function fibonacci(n) {
    // Apply a method to generate the Fibonacci sequence up to n terms.
    return [];
}

console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
Find the Intersection of Two Arrays

javascript
Copy code
function findIntersection(arr1, arr2) {
    // Apply a method to find the intersection of the two arrays.
    return [];
}

console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
Rotate an Array by K Positions

javascript
Copy code
function rotateArray(arr, k) {
    // Apply a method to rotate the array by k positions.
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
Check if a String Contains Only Digits

javascript
Copy code
function isDigitOnly(str) {
    // Apply a method to check if the string contains only digits.
    return false;
}

console.log(isDigitOnly("12345")); // Output: true
Convert a Number to Binary

javascript
Copy code
function toBinary(num) {
    // Apply a method to convert the number to binary.
    return "";
}

console.log(toBinary(10)); // Output: "1010"
Find the Second Largest Number in an Array

javascript
Copy code
function secondLargest(arr) {
    // Apply a method to find the second largest number in the array.
    return -1;
}

console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
Check if a String is a Valid Email

javascript
Copy code
function isValidEmail(email) {
    // Apply a method to check if the string is a valid email.
    return false;
}

console.log(isValidEmail("test@example.com")); // Output: true
Find the Most Frequent Element in an Array

javascript
Copy code
function mostFrequent(arr) {
    // Apply a method to find the most frequent element in the array.
    return -1;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4])); // Output: 3
Check if a Number is a Perfect Square

javascript
Copy code
function isPerfectSquare(num) {
    // Apply a method to check if the number is a perfect square.
    return false;
}

console.log(isPerfectSquare(16)); // Output: true
Remove All Whitespace from a String

javascript
Copy code
function removeWhitespace(str) {
    // Apply a method to remove all whitespace from the string.
    return str;
}

console.log(removeWhitespace(" h e l l o ")); // Output: "hello"
Find the Index of the First Occurrence of a Substring

javascript
Copy code
function indexOfSubstring(str, sub) {
    // Apply a method to find the index of the first occurrence of the substring in the string.
    return -1;
}

console.log(indexOfSubstring("hello world", "world")); // Output: 6
Replace All Occurrences of a Substring

javascript
Copy code
function replaceSubstring(str, oldSub, newSub) {
    // Apply a method to replace all occurrences of the old substring with the new substring.
    return str;
}

console.log(replaceSubstring("hello world", "world", "everyone")); // Output: "hello everyone"
Check if an Array is Sorted in Ascending Order

javascript
Copy code
function isSorted(arr) {
    // Apply a method to check if the array is sorted in ascending order.
    return false;
}

console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
Count the Number of Occurrences of a Character in a String

javascript
Copy code
function countCharacter(str, char) {
    // Apply a method to count the number of occurrences of the character in the string.
    return 0;
}

console.log(countCharacter("hello world", "l")); // Output: 3
Check if a String Starts with a Specific Substring

javascript
Copy code
function startsWithSubstring(str, sub) {
    // Apply a method to check if the string starts with the specific substring.
    return false;
}

console.log(startsWithSubstring("hello world", "hello")); // Output: true
Check if a String Ends with a Specific Substring

javascript
Copy code
function endsWithSubstring(str, sub) {
    // Apply a method to check if the string ends with the specific substring.
    return false;
}

console.log(endsWithSubstring("hello world", "world")); // Output: true
Find the First Non-Repeating Character in a String

javascript
Copy code
function firstNonRepeatingChar(str) {
    // Apply a method to find the first non-repeating character in the string.
    return '';
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"
Merge Two Objects

javascript
Copy code
function mergeObjects(obj1, obj2) {
    // Apply a method to merge the two objects.
    return {};
}

console.log(mergeObjects({ a: 1 }, { b: 2 })); // Output: { a: 1, b: 2 }
Check if an Object has a Specific Property

javascript
Copy code
function hasProperty(obj, prop) {
    // Apply a method to check if the object has the specific property.
    return false;
}

console.log(hasProperty({ a: 1, b: 2 }, "a")); // Output: true
Find the Deepest Nested Property in an Object

javascript
Copy code
function findDeepestProperty(obj) {
    // Apply a method to find the deepest nested property in the object.
    return null;
}

console.log(findDeepestProperty({ a: { b: { c: 3 } } })); // Output: 3
Convert an Object to an Array of Key-Value Pairs

javascript
Copy code
function objectToArray(obj) {
    // Apply a method to convert the object to an array of key-value pairs.
    return [];
}

console.log(objectToArray({ a: 1, b: 2 })); // Output: [["a", 1], ["b", 2]]
Check if a Value is an Array

javascript
Copy code
function isArray(value) {
    // Apply a method to check if the value is an array.
    return false;
}

console.log(isArray([1, 2, 3])); // Output: true
Convert a Set to an Array

javascript
Copy code
function setToArray(set) {
    // Apply a method to convert the set to an array.
    return [];
}

console.log(setToArray(new Set([1, 2, 3]))); // Output: [1, 2, 3]
Check if a String Contains Only Letters and Numbers

javascript
Copy code
function isAlphanumeric(str) {
    // Apply a method to check if the string contains only letters and numbers.
    return false;
}

console.log(isAlphanumeric("abc123")); // Output: true
Generate a Random Integer Between Two Values

javascript
Copy code
function randomInt(min, max) {
    // Apply a method to generate a random integer between min and max.
    return 0;
}

console.log(randomInt(1, 10)); // Output: A random integer between 1 and 10
Shuffle an Array

javascript
Copy code
function shuffleArray(arr) {
    // Apply a method to shuffle the array.
    return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5])); // Output: A shuffled array
Convert a CamelCase String to Kebab-Case

javascript
Copy code
function camelToKebab(str) {
    // Apply a method to convert the camelCase string to kebab-case.
    return str;
}

console.log(camelToKebab("camelCaseString")); // Output: "camel-case-string"
Check if a Number is Negative

javascript
Copy code
function isNegative(num) {
    // Apply a method to check if the number is negative.
    return false;
}

console.log(isNegative(-5)); // Output: true
Remove the First Element from an Array

javascript
Copy code
function removeFirstElement(arr) {
    // Apply a method to remove the first element from the array.
    return arr;
}

console.log(removeFirstElement([1, 2, 3])); // Output: [2, 3]
Remove the Last Element from an Array

javascript
Copy code
function removeLastElement(arr) {
    // Apply a method to remove the last element from the array.
    return arr;
}

console.log(removeLastElement([1, 2, 3])); // Output: [1, 2]
Check if Two Arrays are Equal

javascript
Copy code
function arraysEqual(arr1, arr2) {
    // Apply a method to check if the two arrays are equal.
    return false;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // Output: true
Convert a String to Snake Case

javascript
Copy code
function toSnakeCase(str) {
    // Apply a method to convert the string to snake case.
    return str;
}

console.log(toSnakeCase("hello world")); // Output: "hello_world"
Convert a String to Camel Case

javascript
Copy code
function toCamelCase(str) {
    // Apply a method to convert the string to camel case.
    return str;
}

console.log(toCamelCase("hello world")); // Output: "helloWorld"
