const express = require("express");
const app = express();
const { port, apiUrl } = require("./config");

// imports
const postsRouter = require("./routers/posts");

// middlewares
app.use(express.static("public"));
app.use(express.json());

// routers
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server listening on ${apiUrl}`);
});
