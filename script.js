window.addEventListener('load', () => {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});

document.getElementById('color-picker').addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
    localStorage.setItem('backgroundColor', selectedColor);
});


const submit_button = document.getElementById("submit-button");

submit_button.addEventListener('click', async (e) => {
    let input = document.getElementById('question').value;
    let response = await fetch(`http://localhost:3000/eight_ball`);
    let result = await response.json();
    let output = document.getElementsByClassName('response')[0];
    output.innerHTML = result.answer;

    if (input == null) {
        output.innerHTML = "Please enter a question.";
        return;
    }

    try {
        const post = await fetch('http://localhost:3000/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: input, answer: result.answer }),
        });

        if (!post.ok) {
            const errorData = await post.json();
            output.innerHTML = `Error: ${errorData.message}`;
            return;
        }

        const questionData = await post.json();

        output.innerHTML = `Question: ${questionData.question} <br> 8 ball's response: ${questionData.answer}`;
        let gif_img = document.getElementById('image_response');
        gif_img.src = result.image;

        let ballInside = document.getElementById('ball-white');
        ballInside.innerHTML = `<div id="triangle"><img id="blue_triangle" src="blue_triangle.png"><p id="ball_answer">${questionData.answer}</p></div>`;
        
    } catch (error) {
        console.error('Error interacting with the questions API:', error);
        output.innerHTML = "Failed to submit your question.";
    }
});
