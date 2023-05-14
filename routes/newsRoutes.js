const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.news_index);
router.get('/admin', controller.news_admin_index);
router.get('/:id', controller.news_details);
router.get('/admin/:id', controller.news_details_admin);
router.get('/add-new', controller.news_create_get);
router.post('/', controller.news_create_post);
router.delete('/admin/:id', controller.news_delete);

module.exports = router;