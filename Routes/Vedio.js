const express = require('express');
const router = express.Router();
const vedioController = require('../Controller/videos-controller')

//addVedio
router.post('/addVedio',vedioController.addVedio)

//getVedio
router.get('/fetchOne',vedioController.fetchOne)

//fetchAll Vedio
router.get('/fetchAll',vedioController.fetchAll)

//fetchTopVedio
router.get('/fetchTopVedio',vedioController.fetchAllVedio)

//updateVedio
router.put('/update/:id',vedioController.updateVedio)

//deleteVedio
router.delete('/deleteOne',vedioController.deleteOne)









module.exports = router