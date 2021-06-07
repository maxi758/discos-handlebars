const express = require("express");
const app = express();
const path = require("path");
const discos = require("./discos.json");
const PORT = 3000;
const hbr = require("express-handlebars");

app.use(express.static(path.join(__dirname, "client")));

app.engine("handlebars", hbr({
	defaultLayout: "main-layout",
	layoutsDir: "views/layouts"
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", {
    titulo: "Sitio de busqueda ",
  });
});

app.get("/buscar", (req, res)=>{
	let title = req.query.title;
	let year = req.query.year;
	let artist = req.query.artist;

	let result = discos.discos;

	if(title){
			result = result.filter((disco)=>disco.titulo.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
	}
	if(year){
			result = result.filter((disco)=>disco.lanzamiento.toString()===year);
	}
	if(artist){
			result = result.filter((disco)=>disco.artista.toLocaleLowerCase().includes(artist.toLocaleLowerCase()));
	}
	console.log(result);
	res.render("discs", {
		discs: result
	}); 
});

app.listen(PORT, ()=>{
	console.log("iniciando server");
})