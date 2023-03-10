let contenedor=document.querySelector(".container")

let array=data.events;

console.log(array)
let fragment=document.createDocumentFragment()


let upcoming=[]

 function filtrarFechas(arr){
  upcoming=[]
  arr.forEach(val => {
    if(val.date>data.currentDate){
      upcoming.push(val)
    }
  })
  }
  
  filtrarFechas(data.events)

  console.log(upcoming)

  for (const dato of upcoming){
    contenedor.innerHTML += `<div class="caja">
    <img id="card-image" src="${dato.image}" alt="">
    <h2>${dato.name}</h2>
    <p>${dato.description}</p>
    <span>Precio:$ ${dato.price}</span>
    <a class="mas" href="./details.html?id=${dato._id}">ver más</a>]
    </div>
    `}
   console.log([document])

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