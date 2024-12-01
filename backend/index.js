import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import { Question } from './question.js';

const app = express();
app.use(cors());

const port = 3000;
app.use('/public', express.static('public'));
app.use(bodyParser.json());

app.get('/eight_ball', async (req, res) => {
    try {
        let response = await fetch(`https://yesno.wtf/api`);
        let result = await response.json();
        res.status(200).json(result);
    }
    catch (e){
        console.log(e);
        res.status(400).send("failed");
    }
})

app.post('/questions', (req, res) => {
    let q = Question.create(req.body);
    if (!q) {
        res.status(400).send("Bad request");
        return;
    }

    res.status(201).json(q.json());
});


app.listen(port, () => {
    console.log(`Running on port ${port}`);
})