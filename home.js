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
  <a class="mas" href="./details.html?id=${dato._id}">ver más</a>]
  </div>
  `}
 // contenedor.appendChild(fragment)
 //console.log(fragment)

 

