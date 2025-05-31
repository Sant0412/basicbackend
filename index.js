require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("kaursantdotcom");
});

app.get("/login", (req, res) => {
  res.send(
    `<form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>`
  );
});

app.get("/youtube", (req, res) => {
  res.send("You are using youtube.com ");
});

app.listen(process.env.PORT, () => {
  console.log("app is listening at port");
});
