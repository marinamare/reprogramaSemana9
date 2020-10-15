const express = require("express");
const router = express.Router();
const controller = require("../controller/equipeController");


router.get("/", controller.getColaboradoras);
router.get("/equipe", controller.getColaboradoras);
router.get("/:id", controller.getPessoaById);

router.post("/", controller.postColaboradora);
/*router.delete("/:id", controller.deleteColaboradora);  
*/
module.exports = router;
