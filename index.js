process.on("uncaughtException", console.error);
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const githubData = {
  login: "Sant0412",
  id: 136969253,
  node_id: "U_kgDOCCn8JQ",
  avatar_url: "https://avatars.githubusercontent.com/u/136969253?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Sant0412",
  html_url: "https://github.com/Sant0412",
  followers_url: "https://api.github.com/users/Sant0412/followers",
  following_url: "https://api.github.com/users/Sant0412/following{/other_user}",
  gists_url: "https://api.github.com/users/Sant0412/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Sant0412/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Sant0412/subscriptions",
  organizations_url: "https://api.github.com/users/Sant0412/orgs",
  repos_url: "https://api.github.com/users/Sant0412/repos",
  events_url: "https://api.github.com/users/Sant0412/events{/privacy}",
  received_events_url: "https://api.github.com/users/Sant0412/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 2,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-06-18T10:55:01Z",
  updated_at: "2025-05-31T02:54:56Z",
};

app.get("/", (req, res) => {
  console.log("Home route accessed");
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

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
