
//alert('hola mundo');

//document.getElemenById(" id ") - para imprimir por pantalla.

// + para concatenación

/* datos.innerHTML = `
    codigo html
`; */

// Funciones.

function muestraMiNombre() {

}

var nombres = [];

nombres.forEach(function(nombre){
    document.write(nombre + '<br>');
});

nombres.forEach((nombre) => {
    document.write(nombre + '<br>');
});


// JSON
var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo,this.maxima,this.antiguedad);
    }
};

document.write("<h1>"+coche.modelo+"</h1>" );
coche.mostrarDatos();
console.log(coche);

// Promesas

var saludar = new Promise((resolve, reject) => {
    setTimeout ( () => {
        let saludo = "Hola a todos";

        if (saludo) {
            resolve(saludo);
        } else {
            reject('No hay saludo disponible');
        }
    }, 2000);
});

saludar.then( resultado => {
    alert(resultado);
})
.catch(err => {
    alert(error);
})

