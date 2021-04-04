const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const mongoURL = 'mongodb://127.0.0.1/todo';
const mongoArgs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

let homeRoute = require('./routes/home');
let addRoute = require('./routes/addTodo');
let deleteRoute = require('./routes/deleteTodo');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRoute);
app.use('/add', addRoute);
app.use('/delete', deleteRoute);

mongoose.connect(mongoURL, mongoArgs, async (error) => {
    if (error) {
        return console.error(`Error to connect to DB.`);
    }

    console.log('MongoDB connected successfully.');
})

app.listen(port, () => {
    console.log(`Server listen at port: ${port}`);
});
