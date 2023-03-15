class Productos {
    constructor (nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
const arroz = new Productos ("Arroz",250);
const papitas = new Productos ("Papitas",220);
const alfajor = new Productos ("Alfajor",150);
const pochoclos = new Productos ("Pochoclos",80);
const leche = new Productos ("Leche",120);
const lentejas = new Productos ("Lentejas",180);

let arrayProductos = [arroz,papitas,alfajor,pochoclos,leche,lentejas]
saldo = 1000

let arrayOpciones = [arroz.precio + "$ Arroz\n", papitas.precio + "$ Papitas \n", alfajor.precio + "$ Alfajor \n", pochoclos.precio + "$ Pochoclos \n", leche.precio + "$ Leche\n", lentejas.precio + "$ Lentejas"]

let arrayMisCompras = []
let indice = 0

function vendedor(){
    alert("Hola que tal, tu saldo es de " + saldo + "$ que desea comprar?")
    while(saldo != 0){

        let ingresado = prompt("            LISTA DE COMPRAS             \n " + arrayOpciones)

        if (ingresado == "Arroz"  ){
            saldo = saldo - arroz.precio
            indice = arrayOpciones.indexOf("250$ Arroz\n")
            arrayOpciones.splice(indice,1)
            arrayMisCompras.push ("Arroz")
            if (saldo == 0){
                alert("Perfecto compraste todo lo de la lista, hasta luego!")
                break
            }
            alert("Perfecto, tu nuevo saldo es de " + saldo + "$ ¿Que mas desea comprar?\n" + "Ya compre:  "+ arrayMisCompras)

        }
        else if (ingresado == "Papitas"){
            saldo = saldo - papitas.precio
            indice = arrayOpciones.indexOf("220$ Papitas \n")
            arrayOpciones.splice(indice,1)
            arrayMisCompras.push ("Papitas")
            if (saldo == 0){
                alert("Perfecto compraste todo lo de la lista, hasta luego!")
                break
            }
            alert("Perfecto, tu nuevo saldo es de " + saldo + "$ ¿Que mas desea comprar?\n" + "Ya compre:  "+ arrayMisCompras)

        }
        else if (ingresado == "Alfajor" ){
            saldo = saldo - alfajor.precio
            indice = arrayOpciones.indexOf("150$ Alfajor \n")
            arrayOpciones.splice(indice,1)
            arrayMisCompras.push ("Alfajor")
            if (saldo == 0){
                alert("Perfecto compraste todo lo de la lista, hasta luego!")
                break
            }
            alert("Perfecto, tu nuevo saldo es de " + saldo + "$ ¿Que mas desea comprar?\n" + "Ya compre:  "+ arrayMisCompras)

        }
        else if (ingresado == "Pochoclos"){
            saldo = saldo - pochoclos.precio
            indice = arrayOpciones.indexOf("80$ Pochoclos \n")
            arrayOpciones.splice(indice,1)
            arrayMisCompras.push ("Pochoclos")
            if (saldo == 0){
                alert("Perfecto compraste todo lo de la lista, hasta luego!")
                break
            }
            alert("Perfecto, tu nuevo saldo es de " + saldo + "$ ¿Que mas desea comprar?\n" + "Ya compre:  "+ arrayMisCompras)

        }
        else if (ingresado == "Leche"){
            saldo = saldo - leche.precio
            indice = arrayOpciones.indexOf("120$ Leche\n")
            arrayOpciones.splice(indice,1)
            arrayMisCompras.push ("Leche")
            if (saldo == 0){
                alert("Perfecto compraste todo lo de la lista, hasta luego!")
                break
            }
            alert("Perfecto, tu nuevo saldo es de " + saldo + "$ ¿Que mas desea comprar?\n" + "Ya compre:  "+ arrayMisCompras)

        }
        else if (ingresado == "Lentejas"){
            saldo = saldo - lentejas.precio
            indice = arrayOpciones.indexOf("180$ Lentejas")
            arrayOpciones.splice(indice,1)
            arrayMisCompras.push ("Lentejas")
            if (saldo == 0){
                alert("Perfecto compraste todo lo de la lista, hasta luego!")
                break
            }
            alert("Perfecto, tu nuevo saldo es de " + saldo + "$ ¿Que mas desea comprar?\n" + "Ya compre:  "+ arrayMisCompras)
        }


    }
}

vendedor()