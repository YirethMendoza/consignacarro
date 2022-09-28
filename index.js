const productos = []
let carrito = []
const tbody = document.querySelector('.tbody')

class Producto{
    constructor(id, nombre, precio, img){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
    desplegarProductos(){ 
        const card = `
        <article class="col-3 card-effect mb-5">
            <div class="card d-flex flex-column text-center justify-content-center text">
                <img src="${this.img}" alt="Raiting" class="stock card-img-top">
                <div class="card-body">
                  <h4 class="card-title"> ${this.nombre} </h4>
                  <p class="card-text"> $${this.precio} </p>
                  <button id=${this.id} class='btn btn-primary btnAgregar'>Agregar</button>
                </div>
          </div>
        </article>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
    agregarEvento(){
        const btnAgregar = document.getElementById(this.id)
        const productoEncontrado = productos.find(product => product.id == this.id)
        btnAgregar.addEventListener('click', () => agregarALCarrito(productoEncontrado))
    }
}

let prod1 = new Producto('001', 'Gin Beffeater', 670, './imagenes/ginebra.webp')
let prod2 = new Producto('002', 'Mezcal verde', 450, './imagenes/mezcal.webp')
let prod3 = new Producto('003', 'Absolut Vodka', 300, './imagenes/promo absolut.webp')
let prod4 = new Producto('004', 'Flor de Caña blanco', 700, './imagenes/ron blanco.webp')
let prod5 = new Producto('005', 'Ron Flor de Caña', 850, './imagenes/ron de caña.webp')
let prod6 = new Producto('006', 'Tequila Don Simon', 500, './imagenes/tequila promo.webp')
let prod7 = new Producto('007', 'Vino Blanco', 600, './imagenes/vino blanco.webp')
let prod8 = new Producto('008', 'Vino Rojo', 350, './imagenes/vino.webp')

productos.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8)

console.log(productos)

productos.forEach(e => {
    e.desplegarProductos()
})
productos.forEach(e => {
    e.agregarEvento()
})

function agregarALCarrito(producto) {
    const enCarrito = carrito.find(prod => prod.id == producto.id)

    
    if(!enCarrito){
        carrito.push({...producto, cantidad: 1})
    } else {
        const carritoFiltrado = carrito.filter(prod => prod.id != producto.id) 
        carrito = [
            ...carritoFiltrado,
            {...enCarrito, cantidad: enCarrito.cantidad + 1}
        ]
        renderCarrito()
    }
    contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

}
const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const content = `
        <th scope="row">1</th>
              <td class="table__productos">
                <img src=" ${this.img} " alt="">
              </td>
              <h6 class="title"> ${this.nombre} </h6>
              <td class="table__precio"><p> ${this.precio} </p></td>
              <td class="table__cantidad">
                <input type="number" min="1" value=" ${this.precio} ">
                <button class="delete btn btn-danger">x</button>
              </td>

        `
        tr.innerHTML = content;
        tbody.append(tr)
    })

}