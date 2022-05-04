// alert('Funciona carga');
//Definicion de la funcion
let validar = (event) => {
  // alert('Funciona test');
  //prevenimos acciones por defecto
  event.preventDefault();
  //configuramos la expresion regular
  // let permitido = /[a-zA-Z]/gim;
  let permitido = /^[a-zA-Z ]+$/i;


  //identificacion de elementos del DOM
  let elNombre = document.querySelector('#nombre').value;
  let elAsunto = document.querySelector('#asunto').value;
  let elMensaje = document.querySelector('#mensaje').value;
  //identificacion de elementos del DOM
  let elResultado = document.querySelector('.resultado');
  let elErrorNombre = document.querySelector('.errorNombre');
  let elErrorAsunto = document.querySelector('.errorAsunto');
  let elErrorMensaje = document.querySelector('.errorMensaje');


  let prueba1 = permitido.test(elNombre);
  let prueba2 = permitido.test(elAsunto);
  let prueba3 = permitido.test(elMensaje);

  //VALIDACION GENERAL
  if(prueba1 && prueba2 && prueba3 ){
    elResultado.innerHTML = 'Mensaje Enviado con Exito !!!';
    elErrorNombre.innerHTML = '';
    elErrorAsunto.innerHTML = '';
    elErrorMensaje.innerHTML = '';
  }
  else{

          if(!prueba1){
            elResultado.innerHTML = '';
            elErrorNombre.innerHTML = 'El nombre es Requerido';
          }

          if(!prueba2){
            elResultado.innerHTML = '';
            elErrorAsunto.innerHTML = 'El asunto es Requerido';
          }

          if(!prueba3){
            elResultado.innerHTML = '';
            elErrorMensaje.innerHTML = 'El mensaje es Requerido';
          }

  }//fin else




};
// COMPORTAMIENTOS PARA EL BOTON, EL EVENTO ES CLICK
// let elBoton = document.querySelector('#botton');
// elBoton.addEventListener('click', test);

//COMPORTAMIENTOS PARA EL FORMULARIO. EL EVENTO ES SUBMIT
let form = document.querySelector('#formulario');
form.addEventListener('submit', validar);
