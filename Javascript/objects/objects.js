// Let Var Const

let name;

var name1;

const name2 = 33;

// Let
if (true) {
  //   console.log(subname);
  let subname = 234;
  if (true) {
    console.log(subname);
  }
}
// var uses hoisting effect
if (true) {
  console.log(subname);
  var subname = 234;
  console.log(subname);
}
// const
if (true) {
  const subname = 234;
  const pi = 234;
  //   subname = 432;
  console.log(subname);
}
console.log(subname);

// Objects
// Data Structures

// Key values
// Hash Datastructure
let person = {
  name: "Zeeshan",
  hobby: "nothing",
  designation: "Engineer",
  doesLikeCricket: false,
  kmDriven: 10000,
  nadra: {
    expiryDate: "23/45/667",
    issueDate: "23/45/63",
  },
};

let cat = {
  name: "dsfd",
  age: "asdf",
  lastCheckupDate: "SDAdfgh",
};

let dataFromPipeline = {
  message: "",
  posts: [],
};

person.kmDriven = 43567;
console.log(person);

// person.doesLikeCricket=true
// person.doesLikeCricket=false
if (!person.doesLikeCricket) {
  delete person.kmDriven;
}
console.log(person);

// Arrays
let personNames = [
  "Ali",
  "Zeeshan",
  "Kan",
  "dsf",
  "Dsf",
  23,
  4,
  5,
  6,
  3,
  "Zeeshan",
  true,
  false,
];

let persons = [
  {
    name: "Zeeshan",
    hobby: "nothing",
    designation: "Engineer",
    doesLikeCricket: false,
    kmDriven: 345678,
    nadra: {
      expiryDate: "23/45/667",
      issueDate: "23/45/63",
    },
  },
  {
    name: "Zeeshan",
    hobby: "nothing",
    designation: "Engineer",
    doesLikeCricket: false,
    kmDriven: 234,
    nadra: {
      expiryDate: "23/45/667",
      issueDate: "23/45/63",
    },
  },
  {
    name: "Zeeshan",
    hobby: "nothing",
    designation: "Engineer",
    doesLikeCricket: false,
    kmDriven: 34567,
    nadra: {
      expiryDate: "23/45/667",
      issueDate: "23/45/63",
    },
  },
];
console.log(persons[1].designation);
console.log(persons.length);
console.log(personNames.indexOf("Zeeshan234"));
console.log(personNames.includes("Ali"));
console.log(personNames.lastIndexOf("Zeeshan"));

function sayGreet(func) {
  func();
}

sayGreet(() => {
  console.log("I am Zeeshan Callback Funcugonb");
});

personNames.map((name) => {
  if (name == "Zeeshan") {
    // alert("I found zeeshan");
  }
});

// Filter
// Find
console.log("Zeeshan".includes("as"));
console.log(typeof "ze");

let filteredNames = personNames.filter((name) => {
  if (typeof name == "string") {
    if (name.includes("es") || name.includes("sf")) {
      return true;
    } else {
      return false;
    }
  }
});

console.log(filteredNames);

let filteredPersons = persons.filter((pr) => {
  if (pr.kmDriven > 10000) {
    return true;
  }
});

console.log(personNames);
personNames.push("New Elements");
personNames.push("Mal");
personNames.push("dsfg");
personNames.push("dsfg sfdhgfgjhk");
personNames.push(true);
personNames.push({ name: "dfg" });
personNames.unshift({ name: "dfg" });
console.log(personNames);

console.log(personNames);
personNames.pop();
personNames.pop();
personNames.shift();
console.log(personNames);

let schoolNames = [];

function addSchoolToList() {
  schoolNames.push("LGS");
  schoolNames.push("Zeeshan");
  console.log(schoolNames)
}
