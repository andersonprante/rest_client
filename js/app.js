const input = document.querySelector("#url");
const response = document.querySelector("#response");

async function makeRequest() {
  response.innerHTML = "...";
  url = input.value;
  const options = {
    // mode: "no-cors"
  }
  r = await fetch(url, options).then(r => r.json()).then(j => JSON.stringify(j))
  response.innerHTML = r;
};
