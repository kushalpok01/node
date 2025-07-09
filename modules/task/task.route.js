const express = require('express');
const router = express.Router();
const controller = require('./task.controller');

router.get('',controller.getAllDatas );
router.get('/status/:status',controller.getDataByStatus );
router.get('/:id',controller.getDataById);
router.post('', controller.createData);
router.put('/:id', controller.updateData);
router.delete('/:id', controller.deleteData);

module.exports = router;
