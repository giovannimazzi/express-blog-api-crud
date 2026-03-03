const express = require("express");
const app = express();
const { port, apiUrl } = require("./config");
const postsRouter = require("./routers/posts");

app.use(express.static("public"));

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server listening on ${apiUrl}`);
});
