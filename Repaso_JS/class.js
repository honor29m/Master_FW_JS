class Coche {
    constructor(){      //podemos pasarle parametros
        this.modelo = '';
        this.velocidad = '';
        this.antiguedad = '';
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}


//Herencia
class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo,velocidad,antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La Altura del Bus es: " + this.altura;
    }
}

var coche1 = new Coche(); //También le puedes pasar parametros.