const output = document.getElementById("output");
const outputHadist = document.getElementById("output-hadits")
var url = "https://api.hadith.gading.dev/books"
function getListHadist(){
    axios.get(url).then(function(res){
    var hadiz = res.data.data.map(h => {
        return `<div class="card-hadits">
        <div class="img-hadits">
        <img src="./assets/${h.id}.png" alt="${h.name}"/>
        </div
             <h2>${h.name}</h2>
         <p>Jumlah hadist : <b>${h.available}</b></p>
        <a class="button-33" href="/hadis/${h.id}.html"
        target="_blank">Click Here</a>
        
        </div>`;
    })
    .join("");

    output.innerHTML = hadiz
}) 
}
        // ngapus extension html
        var currentURL = window.location.href
        var fileName = currentURL.split('/').pop();
        var fileNameWithoutExtension = fileName.replace(/\.html$/,'');

function getListHadistById () {
    axios.get(`${url}/${fileNameWithoutExtension}?range=1-300`).then
    (function (res) {
        var gethadits = res.data.data.hadiths.map((hadist) => {
            return `
            <h2>Hadist ke - ${hadist.number}</h2>
            <p class="text-end">${hadist.arab}</p>
            <p>${hadist.id}</p>
            `;
        })
        .join("");

    outputHadist.innerHTML = gethadits
    })
}
function btnSearch() {
    const search = document.getElementById("search-hadits").value
    const judulPencarian = document.getElementById("judul-pencarian")
    const hasilPencarian = document.getElementById("output-search")

axios.get(`${url}/${fileNameWithoutExtension}/${search}`).then(function(res){
    var getSearch = res.data.data.hadiths.filter((fill)=> {
        return fill.id.toLowerCase().includes(search.toLowerCase());
    })


    judulPencarian.innerHTML = `Pencarian Hadits : <b>${search}`;

    hasilPencarian.innerHTML = getSearch
    .map((hasil) => {
        return `
        <div class="my-4 card-hadits-id">
            <h2 class="bg-danger text-white p-2 mb-1"><u>Hadits No : ${hasil.number}</u></h2>
            <p class="text-end fs-5">${hasil.arab}</p>
            <h3>Artinya : </h3>
            <pre class="text-hadits fs-5">${hasil.id}</pre>
        </div>
        `
    })
    .join('')

})
}