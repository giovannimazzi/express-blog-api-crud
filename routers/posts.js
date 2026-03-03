const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

// index
router.get("/", (req, res) => {
  res.json({
    message: "Lista dei post",
    result: posts,
  });
});

// show
router.get("/:id", (req, res) => {
  res.json({
    message: "Dettagli del post " + req.params.id,
    result: posts.find((p) => p.id === parseInt(req.params.id)),
  });
});

// store
router.post("/", (req, res) => {
  res.json({
    message: "Creazione nuovo post",
    result: "",
  });
});

// update
router.put("/:id", (req, res) => {
  res.json({
    message: "Modifica integrale del post " + req.params.id,
    result: "",
  });
});

// modify
router.patch("/:id", (req, res) => {
  res.json({
    message: "Modifica parziale del post " + req.params.id,
    result: "",
  });
});

// destroy
router.delete("/:id", (req, res) => {
  res.json({
    message: "Eliminazione del post " + req.params.id,
    result: posts.filter((p) => p.id !== parseInt(req.params.id)),
  });
});

module.exports = router;
