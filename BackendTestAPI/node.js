const express = require('express');
const app = express();
const port = 80;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()



const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.post('/api/login', jsonParser, (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));