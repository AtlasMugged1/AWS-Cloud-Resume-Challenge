// This is the JS code I need to use to invoke the Lambda function via API gateway to update the view counter on my website.
const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch("https://a6czs9cen0.execute-api.us-east-1.amazonaws.com/Production");
  let data = await response.json();
  counter.innerHTML = ` Views: ${data}`;
}

updateCounter()