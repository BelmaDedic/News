const News = require('../models/news');

const news_index = (req, res) => {
    News.find()
        .then((result) => {
            res.render('guest', { news: result });
        })
        .catch((err) => {
            console.log(err);
        })
}

const news_admin_index = (req, res) => {
    News.find()
        .then((result) => {
            res.render('admin', { news: result });
        })
        .catch((err) => {
            console.log(err);
        })
}

const news_details = (req, res) => {
    const id = req.params.id;
    News.findById(id)
    .then((result) => {
        res.render('details', { news: result })
    })
    .catch((err) => {
        res.status(404).render('404');
    })
}

const news_details_admin = (req, res) => {
    const id = req.params.id;
    News.findById(id)
    .then((result) => {
        res.render('detailsAdmin', { news: result })
    })
    .catch((err) => {
        res.status(404).render('404');
    })
}

const news_create_get = (req, res) => {
    res.render('create');
}

const news_create_post = (req, res) => {
    const news = new News(req.body);
    news.save()
    .then((result) => {
        res.redirect('/news/admin')
    })
    .catch((err) => {
        console.log(err);
    })
}

const news_delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    News.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/news/admin' })
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {
    news_index,
    news_admin_index,
    news_details,
    news_details_admin,
    news_create_get,
    news_create_post,
    news_delete
}