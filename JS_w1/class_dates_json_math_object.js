// const dog = {
//     name: "doggy",
//     legCount: 4,
//     speak: "barki"
// }

// console.log("animal " + dog["name"] + " " + dog["speak"]);

// class Animal {
//     constructor(name, legCount) {
//       this.name = name
//       this.legCount = legCount
//     }
//     static myType() {
//         console.log("I am an animal");
//     }
//     describe() {
//       return `${this.name} has ${this.legCount} legs`
//     }
//   }

//   console.log(Animal.myType());

//   let cat = new Animal("cat", 4);
//   //console.log(cat.myType()); // error because static method can only be directly
//   // called on class and not object of class


//   console.log(cat.describe());
  

// Date
// const currentDate = new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());

// function calculateSum () {
//     let sum = 0;
//     for(let i=0;i<1000000000;i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// // how much time has been taken by this function to execute
// const beforreDate = new Date();
// const beforeTimeinMs = beforreDate.getTime();
// calculateSum();
// const afterDate = new Date();
// const afterTimeinMs = afterDate.getTime();

// console.log(afterTimeinMs - beforeTimeinMs);

// JSON

// const users = {
//     name: "vishal",
//     age: 20,
//    gender: "male",
// }
// console.log(users["name"]);

// to send the data to server 

const users = '{ "name": "vishal", "age": 20, "gender": "male"}';

const user = JSON.parse(users); // convert string to object
console.log(user["gender"]);

const user2 = {
    name: "vishal",
        age: 20,
       gender: "male",
}

const finalString = JSON.stringify(user2); // convert object to string
console.log(finalString);

    