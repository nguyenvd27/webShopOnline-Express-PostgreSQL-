const express = require('express');

const controller = require('../../../controllers/admin/adminUsers/adminUsers.controller');

var router = express.Router();

router.use(express.static('public'));

router.get('/',controller.users );
router.post('/delete', controller.delete);
//router.get('/delete', controller.getDelete);

module.exports = router;