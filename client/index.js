const btnSearch = document.getElementById("btn-Search");
const inputTitle = document.getElementById("input-title");
const inputYear = document.getElementById("input-year");
const inputArtist = document.getElementById("input-artist");

btnSearch.addEventListener("click", function() {
  let url = "/buscar?";
    if(inputTitle.value){
        url += (url ? "&" : "") + `title=${inputTitle.value}`
    }
    if(inputYear.value){
        url += (url ? "&" : "") + `year=${inputYear.value}`
    }
    if(inputArtist.value){
        url += (url ? "&" : "") + `artist=${inputArtist.value}`
    }
  window.location.href = url;
});
