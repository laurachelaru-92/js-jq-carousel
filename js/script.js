$(document).ready(function(){

// Dichiarazione variabili per selezionare le frecce SX/previous e DX/next
  var clickNext = $(".next");
  var clickPrevious = $(".previous");

// Evento al click su "next"
  clickNext.click(goNext);

// Evento al click sulla freccia DX o SX della tastiera
  $("body").keydown(function(e) {
    if (e.which == 39) {  // Se si clicca sulla freccia DX
      goNext();
    } else if (e.which == 37) {  // Se si clicca sulla freccia SX
      goPrevious();
    }
  }
);

// Evento al click su "previous"
  clickPrevious.click(goPrevious);

// Dichiariamo la funzione per spostarci avanti
function goNext() {
  // L'immagine attiva è la prossima a destra
  var activeImg = $("img.active");
  activeImg.removeClass("active");
  if (activeImg.hasClass("last")) { //Se l'immagine attiva è l'ultima, la prossima attiva diventa la prima
    $("img.first").addClass("active");
  } else {
    activeImg.next().addClass("active");
  }
  // Il bullet point attivo è il prossimo a destra
  var activeBullet = $(".fa-circle.active");
  activeBullet.removeClass("active");
  if (activeBullet.hasClass("last")) { //Se il bullet point attivo è l'ultimo, il prossimo attivo diventa il primo
    $(".fa-circle.first").addClass("active");
  } else {
    activeBullet.next().addClass("active");
  }
}

// Dichiariamo la funzione per spostarci indietro
function goPrevious() {
  var activeImg = $("img.active");
  activeImg.removeClass("active");
  if (activeImg.hasClass("first")) { //Se l'immagine attiva è la prima, la prossima attiva diventa l'ultima
    $("img.last").addClass("active");
  } else {
    activeImg.prev().addClass("active");
  }
  // Il bullet point attivo è il prossimo a sinistra
  var activeBullet = $(".fa-circle.active");
  activeBullet.removeClass("active");
  if (activeBullet.hasClass("first")) { //Se il bullet point attivo è il primo, il prossimo attivo diventa l'ultimo
    $(".fa-circle.last").addClass("active");
  } else {
    activeBullet.prev().addClass("active");
  }
}

// Creiamo l'evento che fa apparire l'immagine corrispondente al bullet point cliccato
$(".bullets .fa-circle").click(
  function() {
    // Rimuoviamo la classe "active" dal bullet attivo e dall'immagine attiva
    $(".fa-circle.active, img.active").removeClass("active");
    // La aggiungiamo al bullet cliccato
    $(this).addClass("active");
    // Selezioniamo l'indice del bullet cliccato
    var activeIndexBullet = $(this).index();
    // Diamo la classe "active" all'immagine "figlia" corrispondente all'indice+1
    var activeIndexImg = activeIndexBullet + 1;
    $("img:nth-child("+activeIndexImg+")").addClass("active");
  }
);

});
