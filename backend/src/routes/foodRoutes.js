const router=require("express").Router()
const foodController=require("../controllers/foodController.js")
const tryCatch = require("../middlewares/tryCatch")

router
.post("/create",tryCatch(foodController.AddItems))
.get("/items",tryCatch(foodController.getItems))



module.exports=router 







