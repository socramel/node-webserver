import express from "express";
import "dotenv/config";
import hbs from "hbs";

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "MarcosLema",
    titulo: "Servidor Web",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "MarcosLema",
    titulo: "Servidor Web",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "MarcosLema",
    titulo: "Servidor Web",
  });
});

app.get("*", (req, res) => {
  res.send("Error, la página no existe");
});

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
