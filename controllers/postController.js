const posts = require("../data/posts");

function index(req, res) {
  res.json({
    message: "Lista dei post",
    result: posts,
  });
}

function show(req, res) {
  res.json({
    message: "Dettagli del post " + req.params.id,
    result: posts.find((p) => p.id === parseInt(req.params.id)),
  });
}

function store(req, res) {
  res.json({
    message: "Creazione nuovo post",
    result: "",
  });
}

function update(req, res) {
  res.json({
    message: "Modifica integrale del post " + req.params.id,
    result: "",
  });
}

function modify(req, res) {
  res.json({
    message: "Modifica parziale del post " + req.params.id,
    result: "",
  });
}

function destroy(req, res) {
  res.json({
    message: "Eliminazione del post " + req.params.id,
    result: posts.filter((p) => p.id !== parseInt(req.params.id)),
  });
}

module.exports = { index, show, store, update, modify, destroy };
