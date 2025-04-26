// URL: https://p2pclouds.up.railway.app/v1/learn/weather
// METHOD: GET
// Params: city

const person = {
  name: "Ali",
  experience: "4",
};

const personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(JSON.parse(personJSON));

function getWeather() {
  try {
    const inputRef = document.querySelector("#cityName");
    const divRef = document.querySelector(".response");

    //   If inputRef of specific id not found
    if (!inputRef) {
      alert("Invalid input ref");
      retrun;
    }

    const cityName = inputRef.value.toLowerCase();
    console.log(cityName);

    const weatherPromise = fetch(
      `https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`,
      {
        method: "GET",
      }
    );
    if (weatherPromise.ok == false) {
      alert("Error, Check your internet");
      return;
    }

    weatherPromise
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        console.log(data.current.temp_c);
        divRef.innerHTML = `The weather of ${cityName} is ${data.current.temp_c} celcius`;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
}

function getQueryAnswer() {
  try {
    const inputRef = document.querySelector("#query");
    const divRef = document.querySelector(".response");

    //   If inputRef of specific id not found
    if (!inputRef) {
      alert("Invalid input ref");
      retrun;
    }

    const query = inputRef.value;
    console.log(query);

    const body = {
      contents: [
        {
          parts: [{ text: query }],
        },
      ],
    };
    const weatherPromise = fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBKkmxuKCA3EKPosxkKs3qreWPK4cZE94U`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      }
    );
    console.log("I no wait");

    weatherPromise
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        console.log(data.candidates[0].content.parts[0].text);
        divRef.innerHTML = data.candidates[0].content.parts[0].text;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
}

// Promises
const sum = new Promise((resolve, reject) => {
  if (5 == 4) {
    resolve(10);
  } else {
    reject("Error");
  }
});

sum
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

try {
  console.log("I am in Try block");
  // Run
  //   console.log(age);
  console.log("Nicha age");
} catch (err) {
  console.log("I am in Catch block");
  console.log(err);
}
