// const employeeList = new Array(5);
// console.log(employeeList);
// employeeList[0] = "Reno";
// console.log(employeeList);

// let flexibleArray = [1, true, 300, "Snickers", 5];
// let flexibleArrayLength = flexibleArray.length;
// console.log(flexibleArrayLength);
// flexibleArray[7] = "Adama";
// console.log(flexibleArray);
// console.log(flexibleArrayLength);
// let arrayObj = [
//   { id: 1, enrolled: true },
//   { id: 2, enrolled: true },
//   { id: 3, enrolled: false },
//   { id: 4, enrolled: true },
//   { id: 5, enrolled: false },
// ];

// arrayObj.forEach((item) => {
//   console.log(item);
// });

// let characters = ["Tom Nook", "Isabelle", "Bubbles", "Chevre"];
// console.log(characters.constructor);

// let studentList = ["Merengue", "Orion", "Jannat", "Ray", "Amal"];
// console.log(studentList);
// // studentList.splice(4, 0, "Shola", "Koko");
// // console.log(studentList);
// studentList.unshift("Sabrina", "Balamba");
// console.log(studentList);

// let hackathonTeamA = [
//   {
//     name: "Kenna",
//     role: "frontend",
//   },
//   {
//     name: "Ray",
//     role: "backend",
//   },
//   {
//     name: "Jim",
//     role: "security",
//   },
//   {
//     name: "Buztos",
//     role: "designer",
//   },
// ];

// const designer = hackathonTeamA.some((item) => {
//   return item.role === "designer";
// });

// let hackathonTeamA = [
//   {
//     name: "Kenna",
//     role: "frontend",
//   },
//   {
//     name: "Ray",
//     role: "backend",
//   },
//   {
//     name: "Jim",
//     role: "security",
//   },
//   {
//     name: "Merengue",
//     role: "designer",
//   },
//   {
//     name: "Buztos",
//     role: "designer",
//   },
// ];

// const designer = hackathonTeamA.find((item) => {
//   return item.role === "designer";
// });

// console.log(designer);
// let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
// const myAlphabetLength = (arr) => {
//   console.log(arr.length);
//   if (arr.length < 4) {
//     console.log("Length of item is less than 4");
//   } else {
//     console.log("Length of item is more than 4");
//   }
// };

// myAlphabetLength(myAlphabet);
// const planets = ["abe", "full", 34, true, "bastard"];
// planets.forEach((item, index) => {
//   console.log(`Item ${item} in on index ${index}`);
// });

// const wowDataTypes = ["next", 59, true, { name: "koko" }, undefined];
// wowDataTypes.forEach((item, index) => {
//   console.log(
//     `Item ${item} is on index ${index} and has it is of data type ${typeof item}`
//   );
// });

// let student1Courses = ["Math", "English", "Programming"];
// let student2Courses = ["Geography", "Spanish", "Programming"];

// for (let course1 of student1Courses) {
//   for (let course2 of student2Courses) {
//     if (course1 === course2) {
//       console.log(course1);
//     }
//   }
// }

// let food = ["Noodle", "Pasta", "Ice-cream"];
// let food1 = ["Fries", "Ice-cream", "Pizza"];

// for (let item1 of food) {
//   for (let item2 of food1) {
//     if (item1 === item2) {
//       console.log(item1);
//     }
//   }
// }

// let values1 = ["Apple", 1, false, "a"];
// let values2 = ["Fries", 2, true, "a"];
// let values3 = ["Mars", 9, "Apple", "a"];

// for (let item1 of values1) {
//   for (let item2 of values2) {
//     for (let item3 of values3) {
//       if (item1 === item2 && item2 === item3) {
//         console.log(item1);
//       }
//     }
//   }
// }
// let combinedValues = [values1, values2, values3].flat();
// console.log(combinedValues);
// let furniture = ["Table", "Chairs", "Couch"];
// furniture.forEach((item1) => {
//   item1.split("").forEach((item2) => console.log(item2));
// });

// const string = "Icecream";
// const newString = [];
// string.split("").forEach((item) => {
//   if (item !== "e") {
//     newString.push(item);
//   }
// });
// console.log(newString.join(""));
// let arr = [1, 2, 3];
// let arr1 = [1, 5, 6];
// let arr2 = arr.concat(arr1);
// const newArray = [];
// arr2.forEach((item) => {
//   if (!newArray.includes(item)) {
//     newArray.push(item);
//   }
// });
// console.log(newArray);

// let bakery = [
//   {
//     cookie: "oreo",
//     calories: 350,
//   },
//   {
//     cookie: "fudge",
//     calories: 450,
//   },
//   {
//     cookie: "butter",
//     calories: 700,
//   },
// ];

// bakery.forEach((item) => {
//   return (item.twoHelpings = item.calories * 2);
// });

// console.log(bakery);

// let amazingArray = [{}, null, undefined, ""];
// amazingArray.splice(0, 1);
// console.log(amazingArray);
// let companies = [
//   "cultivating coders",
//   "purple moon",
//   "enterprise skills",
//   "new code",
//   "soft code",
// ];
// companies.splice(companies.indexOf("new code"), 1);
// console.log(companies);
// const techX = companies.slice(
//   companies.indexOf("cultivating coders"),
//   companies.indexOf("cultivating coders") + 1
// );
// console.log(techX);

// const techZ = { ...techX };
// console.log(techZ, typeof techZ);
// techZ.students = 8200;
// console.log(techZ);

// let insects = [
//   {
//     taxanomy: "insecta",
//     name: "Archaeognatha",
//     species: 513,
//     exoskeleton: true,
//   },
//   {
//     taxanomy: "insecta",
//     name: "Plecoptera",
//     species: 3743,
//     exoskeleton: true,
//   },
//   {
//     taxanomy: "insecta",
//     name: "Thysanoptera",
//     species: 5864,
//     exoskeleton: true,
//   },
//   {
//     taxanomy: "insecta",
//     name: "Trichoptera",
//     species: 14391,
//     exoskeleton: true,
//   },
//   {
//     taxanomy: "insecta",
//     name: "Diptera",
//     species: 155477,
//     exoskeleton: true,
//   },
//   {
//     taxanomy: "insecta",
//     name: "Mantodea",
//     species: 2400,
//     exoskeleton: true,
//   },
// ];

// const diptera = insects.some((item) => item.name === "Diptera");
// console.log(diptera);

// const eachSpeciesGreater1000 = insects.every((item) => item.species > 1000);
// console.log(eachSpeciesGreater1000);

let eshoppe = [
  {
    name: "Pens",
    units: 403,
    price: "$1.99",
  },
  {
    name: "Cotton socks",
    units: 432,
    price: "$3.99",
  },
  {
    name: "Shirts",
    units: 1010,
    price: "$12.99",
  },
  {
    name: "Stickers",
    units: 8200,
    price: "$1.99",
  },
  {
    name: "Coffee mug",
    units: 2140,
    price: "$10.99",
  },
];
