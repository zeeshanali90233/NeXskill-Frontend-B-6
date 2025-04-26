titleRef = document.getElementById("title");

console.log(titleRef.innerHTML);

titleRef.innerHTML = "I have hacked your site and changed title.";

function loginUser() {
  console.log("User is Loginned");
  const nameInputRef = document.getElementById("name");
  const alertRef = document.getElementsByClassName("alert");
  const nameValue = nameInputRef.value;
  console.log(nameValue);
  console.log(alertRef[0]);
  const currentDate = new Date();

  //   alertRef[0].innerHTML="Your form has been submitted: " + nameValue
  alertRef[0].innerHTML = `Your form ${nameValue} has been submitted at ${currentDate.toString()}: `;
}

const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.toISOString());
console.log(currentDate.toString());
console.log(currentDate.getUTCDate());

const namesDivRef = document.getElementById("names-show");
const names = ["Zeeshan Ali", "Asad Ali", "Ali", "Farhan"];
// 1 Way
names.map((name) => {
  const newH3 = document.createElement("h3");
  newH3.innerHTML = name;

  namesDivRef.appendChild(newH3);
});
// 2nd Way
names.map((name) => {
  namesDivRef.innerHTML =
    namesDivRef.innerHTML +
    `
  <h3>${name}</h3>
  `;
});
