function init() {
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
}

window.onload = init;

var trucks = "F150" ;

console.log(typeof trucks)