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
    // TODO db auth
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        res.send({ success: true, username: req.body.username, token: '1234567890' });
        return
    }
    res.sendStatus(401);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));