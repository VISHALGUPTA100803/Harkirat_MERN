// const personArray = ["vishal", "harkirat","priya"]
// const genderArray = ["male", "male", "female"]

// for(let i=0;i<personArray.length;i++) {
//     if(genderArray[i] == "male") {
//         console.log(personArray[i])
//     }
// }
//Objects
// const user1 = {
//   firstName: "harkirat",
//   gender: "male",
// };
// const user2 = {
//   firstName: "vishal",
//   gender: "male",
// };

// console.log(user1["firstName"]);
// console.log(user1["gender"]);
// Complex Objects
const allUsers = [
  {
    firstName: "harkirat",
    gender: "male",
  },
  {
    firstName: "vishal",
    gender: "male",
    metadata: {
        age: 21,
        address: ""
    },
  },
  {
    firstName: "priya",
    gender: "female",
  },
];
for(let i=0;i<allUsers.length;i++) {
    if(allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"]) // allUsers[i].firstName
    }
}
Function
function sum(a, b) {
    return a + b;
}
const value = sum(1,2)
console.log(value);


