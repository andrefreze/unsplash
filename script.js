function saveReview() {
  const productName = document.querySelector('input[type="text"]').value;
  const reviewText = document.querySelector('textarea').value;

  if (!productName || !reviewText) return alert('Пожалуйста, заполните все поля');


  localStorage.setItem(`${productName}-review`, JSON.stringify({
    title: productName,
    text: reviewText
  }));

  showReviews();
}

function showReviews() {
  const reviewsList = document.getElementById('reviewsList');
  reviewsList.innerHTML = ''; // Очищаем предыдущий список

  for (const key of Object.keys(localStorage)) {
    if (key.includes('-review')) {
      const reviewData = JSON.parse(localStorage.getItem(key));
      createReviewElement(reviewData);
    }
  }
}

function createReviewElement(reviewData) {
  const reviewsList = document.getElementById('reviewsList');
  const div = document.createElement('div');
  div.className = 'review';
  div.innerHTML = `
    <h3>${reviewData.title}</h3>
    <p>${reviewData.text}</p>
    <button onclick="deleteReview(${JSON.stringify(reviewData)})">Удалить</button>
  `;
  reviewsList.appendChild(div);
}

function deleteReview(reviewData) {
  const key = `${reviewData.title}-review`;
  localStorage.removeItem(key);
  showReviews();
}

showReviews();