class Plato {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  getHTML() {
    return `
      <div class="plato">
        <h3>${this.nombre}</h3>
        <p>${this.descripcion}</p>
        <span>${this.precio}€</span>
      </div>
    `;
  }
}

const plato1 = new Plato("Hamburguesa", "Carne jugosa con queso", 10);
console.log(plato1.getHTML());

class Menu {
  constructor(nombre) {
    this.nombre = nombre;
    this.platos = [];
  }

  addPlato(plato) {
    this.platos.push(plato);
  }

  getMenu() {
    let contenido = "";
    for (let i = 0; i < this.platos.length; i++) {
      contenido += this.platos[i].getHTML();
    }
    return `<div class="menu"><h3>${this.nombre}</h3>${contenido}</div>`;
  }
}

const menu1 = new Menu("Menú del día");
menu1.addPlato(plato1);
console.log(menu1.getMenu());

const platosDisponibles = [];
platosDisponibles.push(plato1);

const plato2 = new Plato("Pizza vegetariana", "Con verduras frescas de temporada", 12);
platosDisponibles.push(plato2);

function mostrarPlatos() {
  let stringPlatos = "";
  for (let i = 0; i < platosDisponibles.length; i++) {
    stringPlatos += platosDisponibles[i].getHTML();
  }
  actualizarSelectPlatosEliminar();
  return `<div class="platos_disp"><h2>Platos Disponibles</h2>${stringPlatos}</div>`;
}

const menusDisponibles = {};
menusDisponibles[menu1.nombre] = menu1;

function mostrarMenus() {
  let listaMenus = "";
  for (let nombreMenu in menusDisponibles) {
    listaMenus += menusDisponibles[nombreMenu].getMenu();
  }
  actualizarSelectMenus();
  return `<div class="lista-menus">${listaMenus}</div>`;
}

function validarEntrada(entrada) {
  const soloLetrasYEspacios = /^[A-Za-záéíóúñÑ\s]+$/;
  return soloLetrasYEspacios.test(entrada);
}

function validarPrecio(precio) {
  const numero = parseFloat(precio);
  return !isNaN(numero) && numero > 0 && isFinite(numero);
}

function agregarPlato() {
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = document.getElementById("precio").value;

  if (validarEntrada(nombre) && validarEntrada(descripcion) && validarPrecio(precio)) {
    const nuevoPlato = new Plato(nombre, descripcion, parseFloat(precio));
    platosDisponibles.push(nuevoPlato);

    const contenedor = document.getElementById("contenedor-principal");
    contenedor.innerHTML = mostrarPlatos();
    actualizarSelectPlatos();

    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
  } else {
    alert("Solo letras para el nombre y descripción, y solo números para el precio






Tú dijiste:
no quites los comentarios al codigo, solo los que enumeran los ejercicios, el resto dejalo tal como esta



ChatGPT Plus
Perfecto 👍 Aquí tienes tu código idéntico al original, pero con solo los comentarios que enumeraban los ejercicios eliminados.
Todos los demás comentarios explicativos y técnicos se conservan tal cual:

js
Copiar código
class Plato {
    constructor(nombre, descripcion, precio) {
    this.nombre = nombre;    // nombre del plato
  this.descripcion = descripcion; // que contiene el plato
    this.precio = precio;      // cuanto vale en euros
      }

  getHTML() {
        // esto devuelve el HTML para mostrar el plato en la pagina
    return `
        <div class="plato">
        <h3>${this.nombre}</h3>
      <p>${this.descripcion}</p>
        <span>${this.precio}€</span>
    </div>
    `;
  }
}

// creo un plato de prueba que vendrá cargado por defecto en la página
const plato1 = new Plato("Hamburguesa", "Carne jugosa con queso", 10);

// muestro en consola para ver si funciona
console.log(plato1.getHTML());

class Menu {
  constructor(nombre) {
      this.nombre = nombre;  // nombre del menu
    this.platos = [];      // array vacio para los platos del menu
    }

    addPlato(plato) {
    // añado un plato al array de platos del menu
    this.platos.push(plato);
  }

  getMenu() {
    let contenido = "";  // aqui voy guardando el HTML de todos los platos
  
  // recorro todos los platos del menu
    for(let i = 0; i < this.platos.length; i++) {
    // por cada plato, llamo a getHTML() y lo añado
    contenido += this.platos[i].getHTML();
  }
    
    // devuelvo el menu completo con nombre y platos
    return `<div class="menu"><h3>${this.nombre}</h3>${contenido}</div>`;
  }
}

const menu1 = new Menu("Menú del día");
menu1.addPlato(plato1);  // añado la hamburguesa al menu

console.log(menu1.getMenu());

const platosDisponibles = [];  // array vacio para todos los platos

// añado los platos que ya tengo
platosDisponibles.push(plato1);  // hamburguesa

// creo otro plato nuevo como pide el ejercicio
const plato2 = new Plato("Pizza vegetariana", "Con verduras frescas de temporada", 12);
platosDisponibles.push(plato2);  // pizza

function mostrarPlatos() {
    let stringPlatos = "";  // variable para el HTML de todos los platos
  
  // recorro el array platosDisponibles
  for (let i = 0; i < platosDisponibles.length; i++) {
    // por cada plato, llamo a getHTML() y lo concateno
    stringPlatos += platosDisponibles[i].getHTML();
  }
  
  // devuelvo todo dentro de un contenedor con titulo
  return `<div class="platos_disp"><h2>Platos Disponibles</h2>${stringPlatos}</div>`;
}

const menusDisponibles = {};  // objeto para guardar menus por nombre

// añado el menu1 usando su nombre como clave
menusDisponibles[menu1.nombre] = menu1;

function mostrarMenus() {
  let listaMenus = "";  // variable para el HTML de todos los menus
  
  // recorro todas las propiedades del objeto menusDisponibles
    for(let nombreMenu in menusDisponibles) {
    // por cada menu, llamo a getMenu() y lo concateno
    listaMenus += menusDisponibles[nombreMenu].getMenu();
  }
  
  // devuelvo todos los menus en un contenedor
  return `<div class="lista-menus">${listaMenus}</div>`;
}

// funcion para validar que solo tenga letras y espacios
function validarEntrada(entrada) {
    const soloLetrasYEspacios = /^[A-Za-záéíóúñÑ\s]+$/;
  // test() devuelve true si cumple, false si no cumple
  return soloLetrasYEspacios.test(entrada);
}

// funcion para validar que el precio sea un numero valido
function validarPrecio(precio) {
  const numero = parseFloat(precio);  // convierto a numero decimal
  
  // verifico que no sea NaN, que sea mayor que 0 y que no sea infinito
  if (!isNaN(numero) && numero > 0 && isFinite(numero)) {
    return true;
  }
    return false;
}

// Funcion para agregar nuevos platos
function agregarPlato() {
    // obtengo los valores de los inputs del formulario
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
  
  // valido todos los campos
  if (validarEntrada(nombre) && validarEntrada(descripcion) && validarPrecio(precio)) {
    // si todo esta bien, creo el nuevo plato
    const nuevoPlato = new Plato(nombre, descripcion, parseFloat(precio));
    
    // añado el nuevo plato al array platosDisponibles
    platosDisponibles.push(nuevoPlato);
    
    // actualizo la visualizacion en la pagina
    const contenedor = document.getElementById("contenedor-principal");
    contenedor.innerHTML = mostrarPlatos();
    
    // actualizo el select de platos para eliminar (importante!)
    actualizarSelectPlatos();
    
    // limpio los campos del formulario
    document.getElementById("nombre").value = "";
      document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    
  } else {
    // si hay error, muestro alerta y limpio los campos
    alert("Solo letras para el nombre y descripción, solo números para el precio");
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
      document.getElementById("precio").value = "";
  }
}

function actualizarSelectPlatos() {
  const selectElement = document.getElementById("selectPlatos");
    if (!selectElement) return;  // si no existe el elemento, salgo
  
  let opciones = "<option value=''>Seleccione un plato</option>";  // opcion por defecto
  
  // recorro todos los platos disponibles
  for (let i = 0; i < platosDisponibles.length; i++) {
    // creo una opcion por cada plato, usando el indice como value
    opciones += `<option value="${i}">${platosDisponibles[i].nombre}</option>`;
  }
  
  // actualizo el HTML del select
    selectElement.innerHTML = opciones;
}

function eliminarPlato() {
    const select = document.getElementById("selectPlatos");
  const posicionSeleccionada = select.value;
  
  // verifico que se haya seleccionado un plato
    if (posicionSeleccionada === "") {
    alert("Por favor, seleccione un plato para eliminar");
    return;  // salgo de la funcion
  }
  
  // convierto el valor string a numero
  const posicion = parseInt(posicionSeleccionada);
  
  // verifico que la posicion sea valida dentro del array
    if (posicion < 0 || posicion >= platosDisponibles.length) {
    alert("La posición seleccionada no es válida");
    return;  // salgo de la funcion
  }
  
  // elimino el plato del array usando splice
  platosDisponibles.splice(posicion, 1);  // elimina 1 elemento en esa posicion
  
  // actualizo la visualizacion de platos
  const contenedor = document.getElementById("contenedor-principal");
    if (contenedor) contenedor.innerHTML = mostrarPlatos();
  
  // actualizo el select de platos
  actualizarSelectPlatos();
  
  // muestro mensaje al usuario
  alert(`Plato eliminado correctamente :)`);
}

function agregarMenu() {
    const nombreMenuInput = document.getElementById("nombreMenu");
  if (!nombreMenuInput) return;  // si no existe, salgo

  // obtengo y limpio el valor (quito espacios al principio y final)
  const nombreMenu = nombreMenuInput.value.trim();
  
  // verifico que no este vacio
    if (nombreMenu === "") {
    alert("Por favor, recuerde que debe ingresar un nombre para el menú!");
    return;
  }

  // verifico que no exista ya un menu con ese nombre
    if (menusDisponibles[nombreMenu]) {
    alert("Ya existe un menú llamado así, intente con otro nombre");
    return;
  }

  // creo el nuevo menu y lo añado al objeto menusDisponibles
  const nuevoMenu = new Menu(nombreMenu);
    menusDisponibles[nombreMenu] = nuevoMenu;

  // actualizo la visualizacion de menus
  const contenedorMenu = document.getElementById("contenedor-menus");
  contenedorMenu.innerHTML = mostrarMenus();
  
  // limpio el campo del formulario
    nombreMenuInput.value = "";
  
  // muestro mensaje de confirmacion
  alert(`Menú "${nombreMenu}" fué agregado correctamente.`);
}

function actualizarSelectPlatosEliminar() {
    const select = document.getElementById("selectPlatosEliminar");
  if (!select) return;  // si no existe, salgo
  
  let opciones = "<option value=''>Seleccione un plato</option>";  // opcion por defecto
  
  // recorro todos los platos disponibles
    for (let i = 0; i < platosDisponibles.length; i++) {
    // creo opcion mostrando nombre y posicion
    opciones += `<option value="${i}">${platosDisponibles[i].nombre} (Posición: ${i})</option>`;
  }
  
  // actualizo el HTML del select
  select.innerHTML = opciones;
}

function actualizarSelectMenus() {
  const select = document.getElementById("selectMenus");
    if (!select) return;  // si no existe, salgo
  
  let opciones = "<option value=''>Seleccione un menú</option>";  // opcion por defecto
  
  // recorro todos los menus disponibles (las claves del objeto)
    for (let nombreMenu in menusDisponibles) {
    // creo opcion con el nombre del menu
    opciones += `<option value="${nombreMenu}">${nombreMenu}</option>`;
  }
  
  // actualizo el HTML del select
  select.innerHTML = opciones;
}

function mostrarPlatos() {
    let stringPlatos = "";
  for (let i = 0; i < platosDisponibles.length; i++) {
    stringPlatos += platosDisponibles[i].getHTML();
  }
  
  // ahora tambien actualiza el select de eliminacion
    actualizarSelectPlatosEliminar();
  
  return `<div class="platos_disp"><h2>Platos Disponibles</h2>${stringPlatos}</div>`;
}

function mostrarMenus() {
  let listaMenus = "";
    for(let nombreMenu in menusDisponibles) {
    listaMenus += menusDisponibles[nombreMenu].getMenu();
  }
  
  // ahora tambien actualiza el select de menus
  actualizarSelectMenus();
  
    return `<div class="lista-menus">${listaMenus}</div>`;
}

function agregarPlatoAMenu() {
    // obtengo las selecciones de ambos selects
  const platoSeleccionado = document.getElementById("selectPlatosEliminar").value;
    const menuSeleccionado = document.getElementById("selectMenus").value;
  
  // verifico que se hayan seleccionado ambos
  if (platoSeleccionado === "" || menuSeleccionado === "") {
    alert("Por favor, seleccione un plato y tambén un menu");
    return;
  }
  
  // convierto y valido la posicion del plato
    const indicePlato = parseInt(platoSeleccionado);
  if (indicePlato < 0 || indicePlato >= platosDisponibles.length) {
    alert("Plato seleccuonado no válido");
    return;
  }
  
  // valido que el menu exista
    const nombreMenu = menuSeleccionado;
  if (!menusDisponibles[nombreMenu]) {
    alert("el menu seleccionado no existte");
    return;
  }
  
  // obtengo los objetos reales del plato y del menu
    const plato = platosDisponibles[indicePlato];
  const menu = menusDisponibles[nombreMenu];
  
  // verifico que el plato no este ya en el menu
    if (menu.platos.some(p => p.nombre === plato.nombre)) {
    alert(`El plato "${plato.nombre}" ya está en el menú "${nombreMenu}"`);
    return;
  }
  
  // añado el plato al menu usando addPlato()
  menu.addPlato(plato);
  
  // actualizo la visualizacion de menus
    const contenedorMenu = document.getElementById("contenedor-menus");
  contenedorMenu.innerHTML = mostrarMenus();
  
  // muestro mensaje de confirmacion
  alert(`Plato "${plato.nombre}" añadido al menú "${nombreMenu}" correctamente`);
}

document.addEventListener('DOMContentLoaded', function() {
  // muestro los platos y menus iniciales
    const contenedor = document.getElementById("contenedor-principal");
  const contenedorMenu = document.getElementById("contenedor-menus");
  
  if (contenedor) contenedor.innerHTML = mostrarPlatos();
    if (contenedorMenu) contenedorMenu.innerHTML = mostrarMenus();
  
  // actualizo todos los selects
  actualizarSelectPlatos();
    actualizarSelectPlatosEliminar();
  actualizarSelectMenus();
  
  // configuro todos los botones
    document.getElementById("btnAgregarPlato").addEventListener("click", agregarPlato);
  document.getElementById("btnEliminar").addEventListener("click", eliminarPlato);
    document.getElementById("btnAgregarMenu").addEventListener("click", agregarMenu);
  document.getElementById("btnAgregarPlatoAMenu").addEventListener("click", agregarPlatoAMenu);
});
