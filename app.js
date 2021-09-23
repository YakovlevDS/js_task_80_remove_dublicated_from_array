// ? Task:Remove Duplicated from Array


// Solution 1

const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]

// ! Explanation: You can easily remove duplicates with Set in JavaScript. Its a life saver.
