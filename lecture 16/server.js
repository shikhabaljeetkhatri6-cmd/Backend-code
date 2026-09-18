const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));
// app.use(morgan('combined'));

// const logMiddleware = (req, res, next) => {
//     console.log("Req url:", req.url,"Time:", new Date().toLocaleString());
//     // res.send("hello from middleware");
//     next();
// };

const welcomeMiddleware = (req, res, next) => {
    console.log("Welcome to my website");
    next();
};

// app.use(authMiddleware);   global middleware
app.use(welcomeMiddleware);
// app.use(logMiddleware);


app.get('/', (req, res) => {
    console.log("Homepage visited");
    res.send('Hello World!');
});


app.get('/about', (req, res) => {
    console.log("about page visited");

    res.send('Hello about page!');
});

 app.get('/about',authMiddleware, (req, res) => {  // route level middleware
   console.log("about page visited");


    res.send('Hello about page!'); });

app.use((req, res) => {
    res.status(404).json({ success:false, message: 'Page not found' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});