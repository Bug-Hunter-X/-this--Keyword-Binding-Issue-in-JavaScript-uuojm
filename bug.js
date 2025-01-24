function myFunc() {
  console.log(this);
}

myFunc(); // this will log the global object (window in browsers, or undefined in strict mode)

const obj = {
  myMethod: myFunc
};

obj.myMethod(); // this will log the object obj