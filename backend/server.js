const express = require('express');
const mongoose = require('mongoose');

const user = require('./routes/users')
const index = require('./routes/index')
const Items = require('./routes/api/items')

const app = express();

app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB database connected")
    })
    .catch(err => console.log(err))


app.use('/', index)
app.use('/user', user)
app.use('/api/items', Items)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});