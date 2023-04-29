// Generate a random HTML code string
const htmlCode = `<html><body><h1>${Math.random()}</h1></body></html>`;

// Define the URL for the API endpoint
const apiEndpoint = '/api/convert';

// Send the HTML code to the API endpoint using POST method
const xhr1 = new XMLHttpRequest();
xhr1.open('POST', apiEndpoint);
xhr1.setRequestHeader('Content-Type', 'application/json');
xhr1.onload = function() {
  // Extract the pdfLink from the response
  const response = JSON.parse(xhr1.responseText);
  const pdfLink = response.pdfLink;

  // Define the URL for the webhook endpoint
  const webhookEndpoint = 'https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39';

  // Send the pdfLink to the webhook endpoint using POST method
  const xhr2 = new XMLHttpRequest();
  xhr2.open('POST', webhookEndpoint);
  xhr2.setRequestHeader('Content-Type', 'application/json');
  xhr2.onload = function() {
    // Log the webhook response
    console.log(xhr2.responseText);
  };
  xhr2.onerror = function() {
    // Handle any errors that occur during the webhook request
    console.error(`Webhook error: ${xhr2.statusText}`);
  };
  xhr2.send(JSON.stringify({ pdfLink: pdfLink }));
};
xhr1.onerror = function() {
  // Handle any errors that occur during the API request
  console.error(`API error: ${xhr1.statusText}`);
};
xhr1.send(JSON.stringify({ htmlCode: htmlCode }));
