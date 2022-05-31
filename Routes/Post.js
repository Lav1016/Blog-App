const express = require('express');
const router = express.Router();
const postConrtoller = require("../Controller/post-controller")

//addone stroy
router.post('/addOnePost',postConrtoller.addOnePost)

//deleteone stroy
router.delete('/deleteStory',postConrtoller.deleteStory)

//updateStory
router.put('/updateStory/:id',postConrtoller.UpdateStory)

//getOneStory
router.get('/getStroy',postConrtoller.getOneStory)






module.exports = router;