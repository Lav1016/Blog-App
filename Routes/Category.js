const express = require('express');
const router = express.Router();
const categoryController = require("../Controller/categories-controller")

//Addone
router.post("/Addone",categoryController.addOne)
//RemoveOne
router.delete("/removeOne",categoryController.removeOneData)
//updateOne 
router.put("/update/:id",categoryController.updateOne)
//getOne
router.get('/getOne',categoryController.getone)

///
router.get('/getAll',categoryController.getAll)



module.exports = router;