const sum = new Promise((resolve, reject) => {
  resolve(4);
});
const multiple = new Promise((resolve, reject) => {
  resolve(54);
});
const sub = new Promise((resolve, reject) => {
  resolve(32);
});

// const ddd=async()=>{}
async function calculateFinalResult() {
  //Synchronous Code
  sum
    .then((res) => {
      console.log("Sum", res);
    })
    .catch((err) => {});
  multiple.then((res) => {
    console.log("Mul", res);
  });
  sub.then((res) => {
    console.log("Minus", res);
  });

  //   Asynchronoyus Code
  try {
    // Concurrent
    const sumValue = await sum;
    console.log("Async Sum Value", sumValue);

    const mulValue = await multiple;
    console.log("Async Multiple Value", mulValue);

    const minusValue = await sub;
    console.log("Async Minus Value", minusValue);

    const apiRes = await fetch(
      "https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore"
    );
    console.log(apiRes);
    const data = await apiRes.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// calculateFinalResult();
