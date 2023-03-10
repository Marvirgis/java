let contenedor=document.querySelector(".container")
//console.log("contenedor"+contenedor)

let array=data.events;
console.log(array)
let fragment=document.createDocumentFragment()
for (const dato of array){
  contenedor.innerHTML += `<div class="caja">
  <img id="card-image" src="${dato.image}" alt="">
  <h2>${dato.name}</h2>
  <p>${dato.description}</p>
  <span>Precio:$ ${dato.price}</span>
  <a class="mas" href="./details.html?id=${dato._id}">ver más</a>
  </div>
  `}
 // contenedor.appendChild(fragment)
 //console.log(fragment)

categorias=[]

array.forEach( val=> {
  if(!categorias.includes(val.category)){
    categorias.push(val.category)
  } 
});
console.log(categorias);

let seleccionar=document.getElementById("seleccionar")
//console.log(seleccionar);

for (category of categorias) {
  seleccionar.innerHTML+=`
 ${category}<input type="checkbox" name="${category}" id="1">
 
  `
}