function mostrarimputcarrera() {
  console.log("asdadsad");
  document.getElementById("edit-carrera").style.display = "block";
}

function cambiartexto(valor) {
  document.getElementById("primeritem").innerText = valor;
}

function teclaenter(e) {
  if (e.key == "Enter") {
    document.getElementById("edit-carrera").style.display = "none";
  }
}

let campodetexto = document.getElementById("edit-carrera");
console.log(campodetexto)
campodetexto.addEventListener("keyup", (e) => {
  
  if (e.key == "Enter") {
    document.getElementById("edit-carrera").style.display = "none";
  }
});
