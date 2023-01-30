

let productoGames = [{ id: 1, nombre: "the last of us", categoria: "Videojuegos", precio: 7000, stock: 200, imgUrl: "https://www.storegames.ar/files/images/thumbs/productos_300x400_1491343640-last_of_us-2507095.jpg" },
{ id: 3, nombre: "grand theft auto v", categoria: "Videojuegos", precio: 5000, stock: 150, imgUrl: "https://www.storegames.ar/files/images/thumbs/productos_300x400_1535737746-1789113-l.jpg" },
{ id: 8, nombre: "MMA", categoria: "Videojuegos", precio: 5800, stock: 350, imgUrl: "https://www.storegames.ar/files/images/thumbs/productos_300x400_1669327156-wwe-2k22-ps4-0.jpg" },
{ id: 12, nombre: "Rust", categoria: "Videojuegos", precio: 3800, stock: 150, imgUrl: "https://www.storegames.ar/files/images/thumbs/productos_300x400_1619217083-rust-ps4-pre-orden.jpg" },
{ id: 5, nombre: "Spider-Man", categoria: "Videojuegos", precio: 8000, stock: 250, imgUrl: "https://www.storegames.ar/files/images/thumbs/productos_300x400_1629828538-marvels-spider-man-game-of-the-year-edition-ps4.jpg" }

]

let carrito = []
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

let games = document.getElementById("games")
let contenedorCarrito = document.getElementById("contenedorCarrito")
let buscador = document.getElementById("buscador")
let buscar = document.getElementById("buscar")
buscar.onclick = filtrar

renderizarProducto(productoGames)
// renderizarCarrito(carrito)

function filtrar() {
    let productosFiltrados = productoGames.filter(productoGames => productoGames.nombre.toLowerCase().includes(buscador.value.toLowerCase()))
    renderizarProducto(productosFiltrados)
}


function renderizarProducto(arrayDeProducto) {
    games.innerHTML = ""

    arrayDeProducto.forEach(productoGames => {
        let contenedorNombre = document.createElement("div")

        contenedorNombre.classList.add("producto")

        contenedorNombre.innerHTML = `
    <h3> ${productoGames.nombre}</h3>
    <p>$ ${productoGames.precio}</p>
    <img src=${productoGames.imgUrl} />
    <button id=${productoGames.id}>Agregar al carrito </button>
    `

        if (productoGames.stock < 200) {
            contenedorNombre.classList.add("pocoStock")
            let pocasUnidades = document.createElement("p")
            pocasUnidades.innerText = "quedas pocas unidades"
            contenedorNombre.appendChild(pocasUnidades)



        }
        games.append(contenedorNombre)

        let boton = document.getElementById(productoGames.id)
        boton.onclick = agregarCarrito
    })
}


function agregarCarrito(e) {
    let = e.target.id
    let buscadorProducto = productoGames.find(productoGames => productoGames.id == e.target.id)
    let productosEnCarrito = carrito.find(productoGames => productoGames.id == buscadorProducto.id)
    if (productosEnCarrito) {
        let posicionCarrito = carrito.findIndex( productoGames => productoGames == productosEnCarrito)
        carrito[posicionCarrito].unidades++
        carrito[posicionCarrito].subtotal = carrito[posicionCarrito].precio * carrito[posicionCarrito].unidades
    } else {
        buscadorProducto.unidades = 1
        buscadorProducto.subtotal = buscadorProducto.precio

        carrito.push(buscadorProducto)
    }

    let carritoJSON = JSON.stringify("carrito")
localStorage.setItem("carrito", carritoJSON)

    renderizarCarrito(carrito)
}


function renderizarCarrito(productosEnCarrito) {
    contenedorCarrito.innerText = ""
    productosEnCarrito.forEach(productoGames => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.classList.add("itemCarrito")
        tarjetaProducto.innerHTML = `
            <h3>${productoGames.nombre}</h3>
            <p>${productoGames.unidades}</p>
            <p>${productoGames.subtotal}</p>
        `
        contenedorCarrito.appendChild(tarjetaProducto)

    })


}

