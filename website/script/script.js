var button = document.querySelector('button');

button.addEventListener('click', checkmark);

function checkmark() {
    button.classList.toggle('show');
}

