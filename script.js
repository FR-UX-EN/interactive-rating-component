'use strict';

const radioButtons = document.querySelectorAll('input[type="radio"]');
const submitButton = document.querySelector('button[type="submit"]');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');

function getSelectedRating() {
    const selectedRating = document.querySelector('input[type="radio"]:checked');
    console.log(selectedRating);
    return selectedRating ? selectedRating.value : null;
}

function handleSubmit(event) {
    event.preventDefault();

    const selectedRating = getSelectedRating();

    if (!selectedRating) {
        return;
    }

    updateUI(selectedRating);
}

function updateUI(rating) {
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
    document.getElementById('selected-rating').textContent = rating;
}


submitButton.addEventListener('click', handleSubmit)
