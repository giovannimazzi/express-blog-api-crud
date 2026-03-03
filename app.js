const express = require("express");
const app = express();
const port = 3000;
const apiUrl = `http://localhost:${port}`;

const postsRouter = require("./routers/posts");

app.use(express.static("public"));

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server listening on ${apiUrl}`);
});
