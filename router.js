const express = require("express")
const router = express.Router();

router.get('/map', (req,res) => res.render("map"))
router.get('/about', (req,res) => res.render("about"))
router.get('/problem', (req,res) => res.render("problem"))
router.get('/solution', (req,res) => res.render("solution"))
router.get('/articles', (req,res) => res.render("articles"))

router.get('/', (req,res) => res.render("home"))



module.exports = router;