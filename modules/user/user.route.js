const express = require('express');
const router = express.Router();
const usercontroller = require('./user.controller');

router.get('',usercontroller.getAllUsers );
router.get('/status/:status',usercontroller.getUsersByStatus );
router.get('/id/:id',usercontroller.getUsersById );
router.get('/dob/:dob',usercontroller.getUsersByDob );
router.get('/under18',usercontroller.getUsersUnder18 );
router.get('/gender/:gender',usercontroller.getUsersByGender );
// router.post('', usercontroller.createUsers);
// router.put('/:id', usercontroller.updateUsers);
// router.delete('/:id', usercontroller.deleteUsers);

module.exports = router;
