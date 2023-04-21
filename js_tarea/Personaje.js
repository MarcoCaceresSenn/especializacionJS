/*-----------------|Personajes|-------------------*/
let MainCharacter = {nombre : "elva lazo", vidaMaxima : 300, ataque : 30}
let Villian = {nombre : "elpis tola", vidaMaxima : 300, ataque : 10}
var turno = 0;
/*-----------------|Atacar|-------------------*/

function atacar(personaje){
    personaje.vidaMaxima -= this.ataque;
}

while (MainCharacter.vidaMaxima > 0 && Villian.vidaMaxima > 0){
    console.log("Inicio de turno" + turno + ", vida de elva lazo: " + MainCharacter.vidaMaxima + " y vida de elpis tola: " + Villian.vidaMaxima + "\n")
    atacar.call(MainCharacter, Villian);
    console.log("Elva lazo ataca a elpis tola, vida de elpis tola: " + Villian.vidaMaxima + "\n")
    atacar.call(Villian, MainCharacter);
    console.log("Elpis tola ataca a elva lazo, vida de elva lazo: " + MainCharacter.vidaMaxima + "\n")
    console.log("_________________________________________________________________________________________________________________________\n")
    turno++;
}
console.log("El combate a finalizado, vida de elva lazo: " + MainCharacter.vidaMaxima + " y vida de elpis tola: " + Villian.vidaMaxima + "\n")
console.log("Gana el combate: " + (MainCharacter.vidaMaxima > Villian.vidaMaxima ? MainCharacter.nombre : Villian.nombre) + "\n")
console.log("Su vida restante es " + (MainCharacter.vidaMaxima > Villian.vidaMaxima ? MainCharacter.vidaMaxima : Villian.vidaMaxima) + "\n")
