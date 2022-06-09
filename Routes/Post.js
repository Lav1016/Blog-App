const express = require('express');
const router = express.Router();
const postConrtoller = require("../Controller/post-controller");
const { route } = require('./Comment');
const { verifyToken }=require("../config/Auth")

//addone stroy
router.post('/addOnePost',postConrtoller.addOnePost)

//deleteone stroy
router.delete('/deleteStory',postConrtoller.deleteStory)

//updateStory
router.put('/updateStory/:id',verifyToken,postConrtoller.UpdateStory)

//getOneStory
router.get('/getStroy/:id',postConrtoller.getOneStory)

//getTopStories 
router.get('/getTopStory',postConrtoller.TopStory)

// fetchall Story
router.get('/fetchAllStory',postConrtoller.fetchAll)






module.exports = router;