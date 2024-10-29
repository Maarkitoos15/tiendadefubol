const productos = [
    { id: 1, nombre: "Camiseta FC Barcelona", precio: 50, imagen: "https://www.tudnfanshop.com/cdn/shop/files/9cPUbbpt_BDU.png?v=1726764039&width=5000" },
    { id: 2, nombre: "Camiseta Real Madrid", precio: 55, imagen: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0195-01-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1920&q=75" },
    { id: 3, nombre: "Camiseta Manchester United", precio: 60, imagen: "https://www.soccerfactory.es/images/61041_S0_T0.jpg" },
    { id: 4, nombre: "Camiseta Juventus", precio: 65, imagen: "https://www.futbolemotion.com/imagesarticulos/198072/grandes/camiseta-adidas-juventus-primera-equipacion-2023-2024-nino-black-white-0.webp" },
    { id: 5, nombre: "Camiseta Bayern de Múnich", precio: 70, imagen: "https://www.futbolemotion.com/imagesarticulos/197675/grandes/camiseta-adidas-fc-bayern-segunda-equipacion-authentic-2023-2024-black-0.webp" },
    { id: 6, nombre: "Camiseta Paris Saint-Germain", precio: 75, imagen: "https://cdn.media.amplience.net/i/frasersdev/36747401_o?fmt=auto&upscale=false&w=1200&h=1200&sm=scaleFit&$h-ttl$" },
    { id: 7, nombre: "Camiseta Liverpool", precio: 65, imagen: "https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/abbf5437a995fd7cabd85bbbc7fdfb0f/c/6/c602f0974f75c985e71af39a0c7802423ed669a9dadda5eeea411dfb4ba6905e.jpeg" },
    { id: 8, nombre: "Camiseta Chelsea", precio: 70, imagen: "https://www.webtuti.com/wp-content/uploads/2020/06/camiseta-chelsea-2021.jpg" },
    { id: 9, nombre: "Camiseta Inter de Milán", precio: 65, imagen: "https://camisetasfutbolybaloncesto.com/wp-content/uploads/2024/08/D1IQfAJqjNeN2sm-Photoroom.png" },
    { id: 10, nombre: "Camiseta AC Milan", precio: 70, imagen: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202405/23/00166969862946____3__1200x1200.jpg" },
    { id: 11, nombre: "Camiseta Manchester City", precio: 75, imagen: "https://camisgo.com/wp-content/uploads/2023/07/Proyecto-nuevo-46-768x768.jpg" },
    { id: 12, nombre: "Camiseta Tottenham Hotspur", precio: 60, imagen: "https://www.merchandisingplaza.es/485200/2/Camisetas-2022-23-Tottenham-Hotspur-Camiseta-2022-23-Tottenham-Hotspur-Third-l.jpg" },
    { id: 13, nombre: "Camiseta Arsenal", precio: 65, imagen: "https://www.futbolemotion.com/imagesarticulos/197667/750/camiseta-adidas-arsenal-fc-segunda-equipacion-2023-2024-solar-yellow-black-0.webp" },
    { id: 14, nombre: "Camiseta Borussia Dortmund", precio: 70, imagen: "https://www.webtuti.com/wp-content/uploads/2020/07/Camiseta-Borussia-Dortmund-2020-2021-01.jpg.webp" },
    { id: 15, nombre: "Camiseta Atlético de Madrid", precio: 65, imagen: "https://camisetasfutbolybaloncesto.com/wp-content/uploads/2023/05/comprar-camiseta-atletico-madrid-2023-2024-local-1.jpg" },
    { id: 16, nombre: "Camiseta FC Porto", precio: 60, imagen: "https://assets-es.imgfoot.com/media/cache/800x800/maillot-exterieur-fc-porto-21-22.jpg" },
    { id: 17, nombre: "Camiseta Benfica", precio: 60, imagen: "https://www.futbolemotion.com/imagesarticulos/204349/750/camiseta-adidas-slb-benfica-segunda-equipacion-2023-2024-black-0.webp" },
    { id: 18, nombre: "Camiseta Ajax", precio: 65, imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3363f8070e41ae8222afc800db90f7_9366/Camiseta_primera_equipacion_Ajax_23-24_Adolescentes_Blanco_HZ7727_01_laydown.jpg" },
    { id: 19, nombre: "Camiseta Celtic", precio: 55, imagen: "https://camisetasfutbolybaloncesto.com/wp-content/uploads/2024/05/6d887a84.jpg" },
    { id: 20, nombre: "Camiseta Sevilla FC", precio: 60, imagen: "https://shop.sevillafc.es/cdn/shop/files/TM4273Camisetanegrasevillafutbolclubterceraequipacion2324_ebca356e-6e2e-44e1-a0a3-b0fc1730e67f_1880x.jpg?v=1694678587" },
    { id: 21, nombre: "Camiseta Valencia CF", precio: 55, imagen: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202307/26/00166969855940____2__1200x1200.jpg?impolicy=Resize&width=1200" },
    { id: 22, nombre: "Camiseta Napoli", precio: 65, imagen: "https://m.media-amazon.com/images/I/81vac2pB9oL._AC_UY580_.jpg" },
    { id: 23, nombre: "Camiseta Bayer Leverkusen", precio: 60, imagen: "https://www.camisetasdefutbolshop.com/image/cache/20231116SX/camiseta-leverkusen-2023-2024-2-equipacion-001-1000x1000.jpg" },
    { id: 24, nombre: "Camiseta Olympique de Marseille", precio: 65, imagen: "https://www.futbolemotion.com/imagesarticulos/200131/grandes/camiseta-puma-olympique-marsella-primera-equipacion-2023-2024-nino-white-0.webp" },
    { id: 25, nombre: "Camiseta Girona", precio: 55, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZIkyU9gTKHF4mFWEDLEFfUGZfhC1LNt9uw&s" },
    { id: 26, nombre: "Camiseta Real Betis", precio: 55, imagen: "https://shop.realbetisbalompie.es/cdn/shop/files/222512-6143_2_1_ff365a39-95c4-4106-a080-5ba2687942ad.jpg?v=1729759938" },
];


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarProductos() {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}€</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedor.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    const productoEncontrado = carrito.find(producto => producto.id === id);
    if (productoEncontrado) {
        productoEncontrado.cantidad++;
    } else {
        const producto = { ...productos.find(prod => prod.id === id), cantidad: 1 };
        carrito.push(producto);
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${producto.nombre} - Cantidad: ${producto.cantidad}</p>
            <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
        `;
        listaCarrito.appendChild(div);
    });
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    actualizarCarrito();
}

document.getElementById('vaciar-carrito').onclick = function() {
    carrito = [];
    actualizarCarrito();
}

// Inicializa la página
mostrarProductos();
mostrarCarrito();
