var lienzo1 = document.getElementById("lienzo");
var papel1 = lienzo.getContext("2d");
var lienzo2 = document.getElementById ("canvas2");
var papel2 = lienzo2.getContext("2d");
var imagen1 = new image();
 imagen1.scr = "http://www.nometoqueslashelveticas.com/2014/02/bug-la-rata-mas-tierna-del-mundo.html";

araña.addEventListener("load", dibujar);

function dibujar() {
  papel1.drawImage(imagen1, 300, 300, 200, 200);
  papel2.drawImage(imagen1 500, 500, 200, 200);

}
