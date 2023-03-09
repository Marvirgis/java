console.log([document])

const queryString=location.search
console.log(queryString)

const params= new URLSearchParams(queryString)

const id=params.get("id")
console.log(id)


let array=data.events
let tarjeta=array.find(identificador=>identificador._id == id)
console.log(tarjeta)

let contenido=document.querySelector(".container")


contenido.innerHTML+= `<div class="caja2">
<h2 class="nombre">${tarjeta.name}</h2>
<img id="card-image" src="${tarjeta.image}" alt="">
<div class="info">
    <p>Descripción: ${tarjeta.description}</p>
    <p>Fecha: ${tarjeta.date}</p>
    <p>Lugar: ${tarjeta.place}</p>
    <p>Precio: ${tarjeta.price}</p>
</div>
</div>`
