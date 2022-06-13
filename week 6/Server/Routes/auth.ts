import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage} from "../Controllers/auth";

/* Display login. */
router.get('/login', DisplayLoginPage);

/* Display register. */
router.get('/register', DisplayRegisterPage);

/* process login. */
router.get('/login', ProcessLoginPage);

/* process register. */
router.get('/register', ProcessRegisterPage);

/* Process logout. */
router.get('/contact', ProcessLogoutPage);

/* TEMPORARY SECTION */


export default router;