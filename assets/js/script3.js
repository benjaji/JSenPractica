
//identificacion de botones en el DOM
let botonSumar = document.querySelector('#btn-sumar');
// let botonSumar = document.getElementById('btn-sumar');
let botonRestar = document.querySelector('#btn-restar');

//definicion de la funcion
let calcularSuma = ()=>{
  let elDato1 = document.querySelector('#valor1').value;
  let elDato2 = document.querySelector('#valor2').value;
  // let elDato1 = document.getElementById('valor1').value;
  let elResultado =  parseInt(elDato1) + parseInt(elDato2);

  let cajaResultado = document.querySelector('.resultado');
  // let cajaResultado = document.getElementByClass('resultado');
  cajaResultado.innerHTML = elResultado;

};


let calcularResta = ()=>{
  let elDato1 = document.querySelector('#valor1').value;
  let elDato2 = document.querySelector('#valor2').value;
  // let elDato1 = document.getElementById('valor1').value;
  let elResultado =  parseInt(elDato1) - parseInt(elDato2);

  if(elResultado < 0){
    elResultado = 0;
  }

  let cajaResultado = document.querySelector('.resultado');
  // let cajaResultado = document.getElementByClass('resultado');
  cajaResultado.innerHTML = elResultado;

};

//Agregamos eventListener
botonSumar.addEventListener('click', calcularSuma);
botonRestar.addEventListener('click', calcularResta);
