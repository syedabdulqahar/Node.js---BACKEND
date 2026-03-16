//callback a function that is passed as an argument
// to another function
Hello(Goodbye);
function Hello(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 3000);
}
// mein ye chah raha k ye cheez confirm ho k goodbye ka
// function hello k bad hi chlay
function Goodbye() {
  setTimeout(() => {
    console.log("goodbye");
  }, 3000);
}
sum(display, 4, 6);
function sum(calback, x, y) {
  let result = x + y;
  calback(result);
}
function display(result) {
  console.log(result);
}
