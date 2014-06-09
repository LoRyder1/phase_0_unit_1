// My role in the group is: Person 1 and then to put it all together

// Here is my part of the challenge:

// User Stories for Group Projecto week 3
// I have one group of numbers: 1, 2, 3, 4, 5, 5, 7
// I have second group of numbers: 4, 4, 5, 5, 6, 6, 6, 7

// 1. I want to be able to get the sum of each group separately.
// 2. I want to be able to get the mean of each group separately. 
// 3. I want to be able to get the median of each group separately.


// User Stories for Group Projecto week 3
// I have one group of numbers: 1, 2, 3, 4, 5, 5, 7
// I have second group of numbers: 4, 4, 5, 5, 6, 6, 6, 7

// 1. I want to be able to get the sum of each group separately.
// 2. I want to be able to get the mean of each group separately. 
// 3. I want to be able to get the median of each group separately.







// Our role in the group is: translate pseudocode into actual code.

// pseudocode

// Define function for sum of elements;
// Set parameters;
// 		Iterate with 'for' all the numbers in an array to get the total sum;
// 		Return sum value;

// user story: 
// as a user I would want to input an array and find the total sum of all the individual elements in the array
function sum_of_elements(user_array) {
    var sum_total = 0;
    for (var i = 0; i < user_array.length; i++) {
        sum_total += user_array[i];
    }
    return sum_total;
}

// Define function to get the mean of elements;
// Set parameters;
// 		Call the sum function and divide the total by the number 
//		of elements in the array;
// 		Return mean value;

// user story:
// As a user I would want to input an array in order to find the average value of an array.
function mean_of_elements(user_array) {
    return sum_of_elements(user_array) / user_array.length;
}

// Define function to get the median of an array;
// Set parameters;
// Sort array;
// 		Define another var (middle or half) to store the value of sorted array / 2;
//
// 		Set this var equal to the array and index into it applying the Math.floor 
//      method to the array length -1 divided by two;
//
// 		Return half value;

// user story:
// As a user I would want to input an array to and find the middle value of an array.
// If there is no single middle value, I would want to find the average value of the two middlemost values

function median_of_elements(user_array) {
    user_array.sort(function(a, b) { return a - b });
    var half = Math.floor(user_array.length / 2);
   
    if ((user_array.length % 2)===1) {
        return user_array[half]
    } else  { 
        var middle_vals=[user_array[half], user_array[half-1]];
        return mean_of_elements(middle_vals);
    }
}

var user_array_odd = [2, 4, 6, 3, 1, 7, 5];
console.log(sum_of_elements(user_array_odd));
console.log(mean_of_elements(user_array_odd));
console.log(median_of_elements(user_array_odd));



var user_array_even = [2, 6, 3, 1, 7, 5];
console.log(sum_of_elements(user_array_even));
console.log(mean_of_elements(user_array_even));
console.log(median_of_elements(user_array_even));





//**************TEST****************



function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}


// Testing for Sum


assert(
  (sum_of_elements instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum_of_elements(user_array_odd) === 28,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum_of_elements(user_array_even) === 24,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)


// Testing for Mean




assert(
  (mean_of_elements instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean_of_elements(user_array_odd) === 4,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean_of_elements(user_array_even) === 4,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)



// Testing for Median




assert(
  (median_of_elements instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median_of_elements(user_array_odd) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median_of_elements(user_array_even) === 4,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)




/*
28 VM104:60
4 VM104:61
4 VM104:62
24 VM104:67
4 VM104:68
4 VM104:69
1. true VM104:84
2. true VM104:84
3. true VM104:84
4. true VM104:84
5. true VM104:84
6. true VM104:84
7. true VM104:84
8. true VM104:84
9. true VM104:84
true
*/

/*
A different array


oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


sum(odd) == 27
sum(even) == 43
mean(odd) == 3.857142857142857
mean(even) == 5.375
median(odd) == 4
median(even) == 5.5

*/





