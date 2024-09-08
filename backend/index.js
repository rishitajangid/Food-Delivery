const express = require('express');
const port = 4000;
const app = express();
const mongoDB = require("./db");

mongoDB();

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});