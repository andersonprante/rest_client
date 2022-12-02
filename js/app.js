const input = document.querySelector("#url");
const response = document.querySelector("#response");

async function makeRequest() {
  response.innerHTML = "...";
  url = input.value;
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    }
  }
  r = await fetch(url, options).then(r => r.json()).then(j => JSON.stringify(j))
  response.innerHTML = r;
};
