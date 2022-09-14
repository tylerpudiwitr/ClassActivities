

// print the length of the Array

// use the length property to access the last item in the Array

// with for...of, loop over the Array, modify the value and add to a different Array
const y = [1, 3, "string", true, false];

for (let firstArray of y) {
  firstArray = firstArray + 1;
};

console.log(y);
