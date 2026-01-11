//Agregar un cuarto elemento a la lista
$("ul").prepend(
  '<li class="list-group-item text-center">Lista de elementos</li>'
);
//Funciones para cambios en la lista
$(document).ready(function () {
  $("li").css("color", "skyblue");
  $("li").css("background-color", "gray");
});
//Boton
$("button").click(function () {
  $("li").toggle();
  if ($("li").is(":visible")) {
    $("button").text("Ocultar");
  } else {
    $("button").text("Mostrar");
  }
});
//Tooltip
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').each(function () {
    new bootstrap.Tooltip(this);
  });
});
