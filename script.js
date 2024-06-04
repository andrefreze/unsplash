const apiKey = 'tFrt3CaOfn3eCXkoSBFAr8Ju3fUc6hy7vv8-JK7WPfA';
const imageContainer = document.querySelector('.image-container');
const imageElement = document.querySelector('.image');
const photographerInfoElement = document.querySelector('.photographer-info');
const likeButton = document.querySelector('.like-button');
const likesCountElement = document.querySelector('.likes-count');

let likesCount = 0;

function getRandomImage() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            const photographerName = data.user.name;
            const photographerUsername = data.user.username;

            imageElement.src = imageUrl;
            photographerInfoElement.innerHTML = `Фотограф: <a href="https://unsplash.com/@${photographerUsername}" target="_blank">${photographerName}</a>`;
        })
        .catch(error => console.error(error));
}

getRandomImage();

likeButton.addEventListener('click', () => {
    likesCount++;
    likesCountElement.textContent = `Лайков: ${likesCount}`;
});