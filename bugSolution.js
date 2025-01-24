function myFunc() {
  console.log(this);
}

// Solution using bind
const boundMyFunc = myFunc.bind({ name: "Bound Object" });
boundMyFunc(); // this will log { name: "Bound Object" }

// Solution using arrow function
const obj2 = {
  myMethod: () => {
    console.log(this); // this will log the global object
  }
};
obj2.myMethod();

const obj3 = {
  myMethod: function() {
    console.log(this); // this will log obj3
  }
};
obj3.myMethod();