//o	Destructuring & spread/rest
//JavaScript Destructing
//ibject desructuring

const student = {
  name: "Qahar",
  Age: 15,
  Class: 12,
};
const { name, Age, ...rest } = student;
const Destructure = { name, Age };
console.log(Destructure);
console.log(rest);
console.log(student);

//Array Destrcturing

const arr = [1, 2, 3, { name: "qahar", age: 18 }];
const [, , , obj] = arr;
console.log(obj);
