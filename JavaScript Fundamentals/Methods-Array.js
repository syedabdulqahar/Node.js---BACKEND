/**
 * •	JavaScript Fundamentals (ES6+):
 * array Method = Map Reduce filter

o	Async programming (Promises, async/await)

 */
console.log(`Important Concepts of JavaScript`);
let arr1 = [11, 2, 3, 4, 5]; // global Deceleration

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(
  `\t Important Information About Map || Filter || Reduce \n`,
  "1.Map Function creates new Array by applying a function to each element \n",
  "2.Filter function create new Array returnin elements passing thorugh specific condition \n",
  "3.We can use map and filter at the same time for changing and applying condition to element at the same time \n",
);
function Display() {
  console.log(`\t Choices \n  `);
  console.log(
    `Global Array=[${arr1}] \n`,
    "1. Square of each Element in Array using Map \n",
    "2. getting odd element from the array susing filter \n",
    "3. performing both tasks defined above together \n",
  );
}
Display();
r1.question("Enter Your Choice = ", (choice) => {
  choice = Number(choice);
  switch (choice) {
    case 1:
      Map();
      break;
    case 2:
      Filter();
      break;
    case 3:
      Both();
      break;
    default:
      console.log("Error ! Enter Correct Choice");
  }
  Display();
});

function Map() {
  console.log(`applyin Sqaure on each element of array using Map `);
  const sqaures = arr1.map((num) => {
    return num * num;
  });
  console.log(
    `Solution- After using Map on Arr1 = [${arr1}] we get new array Squares = [${sqaures}] \n`,
  );
}
function Filter() {
  console.log(`2. Filter returns elements that passes a specific condition `);
  let odd = arr1.filter((num) => {
    return num % 2 != 0;
  });
  console.log(
    `Solution- Array1 was [${arr1}] after filtering odd numbers we get odd=[${odd}] \n`,
  );
}
function Both() {
  console.log(`3. Maping and Filtering Together `);
  let SquaredEvens = arr1.map((num) => num * num).filter((num) => num % 2 != 0);
  console.log(
    `Solution - Array1[${arr1}] after squaring them filtering evens SquaredEven[${SquaredEvens}] \n`,
  );
}
