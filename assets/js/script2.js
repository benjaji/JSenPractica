

//identificar elementos del DOM
let boton1 = document.getElementById('btn-1');
let boton2 = document.getElementById('btn-2');
let boton3 = document.getElementById('btn-3');
let boton4 = document.getElementById('btn-4');
let boton5 = document.getElementById('btn-5');
let boton6 = document.getElementById('btn-6');
let cajaGrande = document.getElementById('caja');

//definicion de funciones
let cambiarColor1 = () =>{
  cajaGrande.setAttribute('style', 'border:1px solid black; width: 100%; height: 100%; background-color: #e53e3e; ');
};

let cambiarColor2 = () =>{
  cajaGrande.setAttribute('style', 'border:1px solid black; width: 100%; height: 100%; background-color: #dd6b20; ');
};

let cambiarColor3 = () =>{
  cajaGrande.setAttribute('style', 'border:1px solid black; width: 100%; height: 100%; background-color: #faf089; ');
};

let cambiarColor4 = () =>{
  cajaGrande.setAttribute('style', 'border:1px solid black; width: 100%; height: 100%; background-color: #48bb78; ');
};

let cambiarColor5 = () =>{
  cajaGrande.setAttribute('style', 'border:1px solid black; width: 100%; height: 100%; background-color: #81e6d9; ');
};

let cambiarColor6 = () =>{
  cajaGrande.setAttribute('style', 'border:1px solid black; width: 100%; height: 100%; background-color: #d53f8c; ');
};

boton1.addEventListener('click', cambiarColor1);
boton2.addEventListener('click', cambiarColor2);
boton3.addEventListener('click', cambiarColor3);
boton4.addEventListener('click', cambiarColor4);
boton5.addEventListener('click', cambiarColor5);
boton6.addEventListener('click', cambiarColor6);
