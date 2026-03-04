const postsData = require("../data/posts");
const { apiUrl } = require("../config");

const normalizeImagePath = () => {
  postsData.forEach((post) => (post.image = apiUrl + post.image));
};

normalizeImagePath();

function index(req, res) {
  let filteredPosts = postsData;

  if (req.query.tag) {
    filteredPosts = postsData.filter((post) =>
      post.tags.includes(req.query.tag),
    );
  }

  res.json({
    message: "Lista dei post",
    result: filteredPosts,
  });
}

function show(req, res) {
  const post = postsData.find((p) => p.id === parseInt(req.params.id));

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.json({
    message: "Dettagli del post " + req.params.id,
    result: post,
  });
}

function store(req, res) {
  const body = req.body;
  console.log(body);
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
  const post = postsData.find((p) => p.id === parseInt(req.params.id));

  if (!post) {
    res.status(404);
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  const index = postsData.indexOf(post);

  index !== -1 && postsData.splice(postsData.indexOf(post), 1);

  console.log(`Lista aggiornata:`);
  console.log(postsData);

  res.sendStatus(204);

  /*  res.json({
    message: "Eliminazione del post " + req.params.id,
    deleted: post,
    result: postsData,
  }); */
}

module.exports = { index, show, store, update, modify, destroy };
