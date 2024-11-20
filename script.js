let username = '';

document.getElementById('login-submit').addEventListener('click', () => {
    username = document.getElementById('username').value;
    document.getElementById('login-box').remove();
    document.getElementById('login-display').innerHTML = username;
})

const submit_button = document.getElementById("submit-button");

submit_button.addEventListener('click', async (e) => {
    let input = document.getElementById('question').innerHTML;
    let response = await fetch(`http://localhost:3000/eight_ball`);
    let result = await response.json();
    let output = document.getElementsByClassName('response')[0];
    output.innerHTML = result.answer;
    let gif_img = document.getElementById('image_response');
    gif_img.src = result.image;
})
