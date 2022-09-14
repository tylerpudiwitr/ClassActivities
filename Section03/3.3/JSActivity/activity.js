// Activity 1

// 1.a
// Declare a function called helloWorld that prints out the string "Hello World"
function helloWorld() {
    console.log("Hello World!");
};
// Invoke the helloWorld function
helloWorld();
// 1.b
// Declare a function called numSum
let sum;
function numSum(num1, num2) {
  sum = num1 + num2;
  console.log(`${num1} plus ${num2} equals ${sum}`);
  // return sum;
}

//    This is the requirements of the function:
//    Accepts 2 parameters
//    Inside the function, add the parameters together
//    The function will print out a string that says: <1st parameter> plus <2nd parameter> equals sum
//    The function will output the sum of the two parameters
// Hints: you will need to use template literals to print out the string
//        there is no one right way to do this, but don't overthink it
console.log(numSum(10, 15));
console.log(sum);
numSum(5,7);
console.log(sum);
// Invoke the function inside of a console.log so we can see the returned value