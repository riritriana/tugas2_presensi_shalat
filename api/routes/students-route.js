import express from "express";
import { getStudents, addStudent, getStudentById, updateStudentById, updatePresentById, deleteStudentById, } from "../controllers/student-controller.js";
import { verifyToken } from "../middleware/middleware.js";

const router = express.Router();

router.get("/get-student", verifyToken, getStudents);
router.get("/get-student-by-id/:id", verifyToken, getStudentById);
router.post("/add-student", verifyToken, addStudent);
router.put("/update-student-by-id/:id", verifyToken, updateStudentById);
router.put("/update-present-by-id/:id", verifyToken, updatePresentById);
router.delete("/delete-student-by-id/:id", verifyToken, deleteStudentById);

export default router;


// import express from "express";
// import {getStudent,addStudent,getStudentById,updatePresentById,updateStudentById,deleteStudentById} from "../controllers/student-controller.js"
// import { verifyToken } from "../middleware/middleware.js";

// const router = express.Router();
// router.get("/get-student",verifyToken,getStudents);
// router.get("/get-student-by-id/:id",verifyToken,getStudentsById);
// router.post("/add-student",verifyToken,addStudent);
// router.put("/update-student-by-id/:id",verifyToken,updateStudentById);
// router.put("/update-present-by-id/:id",verifyToken,updatePresentById);
// router.delete("/delete-student-by-id/:id",verifyToken,deleteStudentById)
// export default router;