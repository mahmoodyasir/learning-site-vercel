const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const blogs = require('./data/blog.json');
const faq = require('./data/faq.json');

app.get('/', (req, res) => {
    res.send('API IS ACTIVATED');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/blogs', (req, res) => {
    res.send(blogs);
})

app.get('/faq', (req, res) => {
    res.send(faq);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courses.find(course => course.id == id);
    res.send(singleCourse);
})

app.get('/highlighted', (req, res) => {
    const highlightedCourse = courses.filter(course => course.is_highlighted == true);
    res.send(highlightedCourse);
})

app.listen(port, () => {
    console.log("Course API is Running on Port", port)
})