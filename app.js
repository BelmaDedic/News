const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const News = require('./models/news')
const newsRoutes = require('./routes/newsRoutes');

const app = express();

const dbURI = 'mongodb+srv://name:password@cluster0.kn4cg.mongodb.net/newspaper?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => app.listen(3000))
.catch((err) => {
    console.log(err);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/news');
});

app.get('/admin', (req, res) => {
    res.redirect('/news/admin');
});

app.get('/add-new', (req, res) => {
    res.render('create');
})

app.use('/news', newsRoutes);
app.use('/news/admin', newsRoutes);

app.use((req, res) => {
    res.status(404).render('404');
});
