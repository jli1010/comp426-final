let username = '';

document.getElementById('login-submit').addEventListener('click', () => {
    username = document.getElementById('username').value;
    document.getElementById('login-box').remove();
    document.getElementById('login-display').innerHTML = username;
})
