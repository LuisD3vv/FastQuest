let tiempo = 31;
let regresiva;
function iniciarTemporizador() {
  
  regresiva = setInterval(() => {
    let elementoAlarma = document.getElementById("audioAlarma");
    let elementotempo = document.getElementById("tempo");
    tiempo--;
    elementotempo.textContent = tiempo;
    if (tiempo == 5) {
      elementotempo.style.color = "red";
    }
    if (tiempo <= 0) {
      clearInterval(regresiva); // parar el intervalo
      elementotempo.textContent = "Se acabo!";
      elementotempo.style.color = "red";

      elementoAlarma.play();
      alert("Game over");
    }
  }, 1000);
}
// simulando un media querie, mala practica, pero por el momento es lo mas optimo
const media = window.matchMedia("(max-width: 40rem)");
function agregarBotones(e) {
  if (e.matches) {
    let agregar = document.querySelector('.contenedor');
    let boton1 = document.createElement('BUTTON');
    let boton2 = document.createElement('BUTTON');
    boton1.classList.add('boton');
    boton1.textContent = 'Reintentar'
    boton2.classList.add('boton');
    boton2.textContent = 'Terminar'
    let contenedor = document.createElement('DIV');
    contenedor.classList.add('contenedor_mediacel')
    contenedor.append(boton1,boton2);
    agregar.append(contenedor);
  }
}
media.addEventListener("change",agregarBotones);

function fincuest() {
  const fecha = new Date(); // Crear el objeto date de donde extraeremos la fecha y hora
  // comprobar todos los campos
  let respuestas = [];
  let impresion = ""
  document.querySelectorAll("input[name='pre']").forEach((e) => {
    respuestas.push(e.value); 
  });

  let vacio = 0
  respuestas.forEach(e=>{
    if (e == '') {
      vacio ++
    }
  })
  const opcionesinValidas = [1,2,3,4,5,6];
  if (opcionesinValidas.includes(vacio)) {
    alert('Debes ingresar todas las respuestas');
    return;
  }
  else {
    respuestas.forEach((e) => {
      if (e) {
        impresion += `Respuesta ${e}\n`;
      }
    });
  }
  alert("tiempo pausado");
  clearInterval(regresiva)
  alert(`Aqui las repuestas\nFecha\n${fecha.toDateString("es-mx")}\n${impresion}`);
}
function reiniciar() {
  alert("Juego Reiniciado");
  location.reload(); // se logra con esto
}
let boton = document.querySelector('#startemp');
boton.addEventListener('click',( )=>{
iniciarTemporizador();
agregarBotones(media);
})
