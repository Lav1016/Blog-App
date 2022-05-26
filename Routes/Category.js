const express = require('express');
const router = express.Router();
const categoryController = require("../Controller/categories-controller")

//Addone
router.post("/Addone",categoryController.addOne)
//RemoveOne
router.delete("/removeOne",categoryController.removeOneData)
//updateOne 
router.put("/update",categoryController.updateOne)

//getOne
router.get('/http://localhost:3000/CategoryRoute/Addone',categoryController.getone)





module.exports = router;