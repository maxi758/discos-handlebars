# discos-handlebars
## La consigna  Desarrollar una app para poder consultar los discos por título, año o artista. Considerar coincidencias parciales.  
## La solución  
### Server  Contiene solo 2 endpoints  GET /: entrega la página inicial, index.html (detallada más abajo)  GET /disco: consulta de discos, recibe por query string los filtros. Busca en los datos que estén en el archivo discos.json y retorna los objetos de los discos coincidentes. 
### Las vistas se renderizan con handlebars
