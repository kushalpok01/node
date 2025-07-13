const express = require('express');
const router = express.Router();
const tcontroller = require('./task.controller');

router.get('',tcontroller.getAllDatas );
router.get('/status/:status',tcontroller.getDataByStatus );
router.get('/id/:id',tcontroller.getDataById);
router.get('/date/:createdAt', tcontroller.getDataByCreatedDate);

router.get('/future', tcontroller.getFutureData);
router.get('/userstatus/:status', tcontroller.getDataByUserStatus);

router.post('', tcontroller.createData);
router.put('/:id', tcontroller.updateData);
router.delete('/:id', tcontroller.deleteData);

module.exports = router;
