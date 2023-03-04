const options = { method: "GET" };

fetch("http://165.232.190.5:1900/flag", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
