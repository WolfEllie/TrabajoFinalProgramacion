document.getElementById('signUp').addEventListener('click', function () {
    document.querySelector('.container').classList.add('sign-up-mode');
});

document.getElementById('signIn').addEventListener('click', function () {
    document.querySelector('.container').classList.remove('sign-up-mode');
});

