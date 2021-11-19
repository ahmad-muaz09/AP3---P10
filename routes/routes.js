//import express
import express from "express";

//import page controller
import {Home, About, Contact} from "../controllers/pages.js"

//init express router
const router = express.Router();

//Home About Contact router
router.get('/', Home);
router.get('/about', About);
router.get('/contact', Contact);

//export default router
export default router;