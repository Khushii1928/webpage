const modules = require("./multireq");
const express = require("express");
const app = express();
const port = 1600;

const navStyles = `
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  padding: 10px;
`;

const navLinkHoverStyles = `
  color: white;
  background-color: #4CAF50;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
`;

const pageBackgroundStyles = `
  background-image: linear-gradient(45deg, #e66465, #9198e5);
  height: 100vh;
`;

app.get("/", function (req, res) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Home Page</title>
        <style>
          nav a {
            text-decoration: none;
            color: black;
            padding: 10px;
            border-radius: 5px;
            transition: all 0.2s ease-in-out;
          }
          nav a:hover {
            ${navLinkHoverStyles}
          }
          nav {
            ${navStyles}
          }
          body {
            ${pageBackgroundStyles}
          }
        </style>
      </head>
      <body>
      <img src="https://www.nanubhaiproperty.com/images/thumbs/logo/71646_developer-khushi-builders-and-developers-in-valsad_300.jpeg" height="100">
        <nav>
          <a href="/"><b>Home</b></a>
          <a href="/about"><b>About</b></a>
          <a href="/contact"><b>Contact</b></a>
          <a href="/express_tutorial"><b>Express Tutorial</b></a>
        </nav>
      </body>
    </html>
  `;
  res.send(html);
});

app.get("/about", (req, res) => {
  res.send(modules.about());
});

app.get("/contact", (req, res) => {
  res.send(modules.contact());
});

app.get("/express_tutorial", (req, res) => {
  res.send(modules.tutorial());
});

app.get("/:id", (req, res) => {
  res.send("The ID you specified is " + req.params.id);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
