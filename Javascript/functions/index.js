// Functions

function sayGreet() {
  console.log("dfsd");
  alert("I am caleed from function inside , sayGreet");
}

// Arguments
function login(email, password) {
  console.log("email", email);
  console.log("password", password);

  return email;
}

// Function Calling
// Parameters
let xyz = login("z@gmail.com", "32546768");
console.log("XYZ", xyz);

// Government
function checkAgeEligibility(age) {
  let isEligible = false;

  if (age >= 18) {
    isEligible = true;
  }

  return isEligible;
}

// My Own
function locallyCheckAgeEligibility(age) {
  let isEligible = checkAgeEligibility(age);
  if (isEligible == true) {
    alert("You are eligible");
  } else {
    alert("You are not eligitble");
  }
}

function checkAvailableSeats() {
  console.log("Available seats are 34 545");
}

function loginFormSubmit() {
  console.log("I am submitted");
}
