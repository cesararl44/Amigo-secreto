let nombres = [];
let nombresSorteados = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  if (nombres.includes(nombre)) {
    alert("Este nombre ya fue agregado.");
    input.value = "";
    return;
  }

  nombres.push(nombre);
  mostrarLista();
  input.value = "";
  actualizarBotones();
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  const disponibles = nombres.filter(nombre => !nombresSorteados.includes(nombre));

  if (disponibles.length === 0) {
    alert("Ya se han sorteado todos los nombres.");
    return;
  }

  const indice = Math.floor(Math.random() * disponibles.length);
  const seleccionado = disponibles[indice];
  nombresSorteados.push(seleccionado);

  const resultado = document.getElementById("resultado");
  resultado.textContent = `🎈 El amigo secreto sorteado es: ${seleccionado}`;

  setTimeout(() => {
    resultado.textContent = "";
  }, 5000);

  actualizarBotones();
}

function limpiarTodo() {
  nombres = [];
  nombresSorteados = [];

  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("amigo").value = "";

  actualizarBotones();
  alert("Lista de nombres y sorteos limpiada. ¡Puedes comenzar de nuevo!");
}

function reiniciarSorteo() {
  nombresSorteados = [];
  document.getElementById("resultado").textContent = "";
  actualizarBotones();
  alert("¡Sorteo reiniciado! Puedes volver a sortear.");
}

function actualizarBotones() {
  const disponibles = nombres.filter(nombre => !nombresSorteados.includes(nombre));
  const sortearBtn = document.getElementById("sortearBtn");
  sortearBtn.disabled = disponibles.length === 0;
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
