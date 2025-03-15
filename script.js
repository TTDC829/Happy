const form = document.getElementById('name-form');
const telegramApiToken = '8132482633:AAFWRE7RkNtfKS788LMB5Z2jFPsgoB1YI4';
const telegramChatId = '7597492261';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const url = `https://api.telegram.org/bot${telegramApiToken}/sendMessage?chat_id=${telegramChatId}&text=Full%20Name:%20${fullName}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
});
