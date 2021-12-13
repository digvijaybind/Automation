const SchoolController=require("./controller/school-controller");
const router=require('express').Router();

router.get("/schoolName",SchoolController);
router.post("/schoolName/create",SchoolController);
router.patch("/schoolName/Update",SchoolController);
router.delete("/schoolName/delete",SchoolController);


module.exports = router;