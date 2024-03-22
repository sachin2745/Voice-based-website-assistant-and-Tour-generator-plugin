// import
const express = require('express');


// initialize
const app = express();
const port = 5000;

const cors = require('cors');

const postRouter = require('./routers/postRouter');

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

// convert json to js
app.use(express.json());

app.use('/post', postRouter);



// start express server

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('add response from express');
});

app.listen( port, () => { console.log('express server started')} );