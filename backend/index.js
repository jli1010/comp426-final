import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3000;


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


app.listen(port, () => {
    console.log(`Running on port ${port}`);
})