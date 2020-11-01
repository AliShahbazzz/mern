const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Items = require('./routes/api/items')
const User = require('./routes/user')

const app = express();
app.use(express.json());
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB database connected")
    })
    .catch(err => console.log(err))

app.use('/api/items', Items)
app.use('/api/user', User)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});