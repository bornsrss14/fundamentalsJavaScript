"use strict";

//TENGO UN OBJETO CON UNA PROPIEDAD DE MÉTODO
const object = {
  initial: 0,
  final: 4,
  increment: function (step) {
    this.final += step;
    return this.final;
  },
};

const object2 ={
    initial:4,
    final:1,
};

//accedo a ese metodo con bind y creo un nuevo metodo 
// const copiaIncrementBind = object.increment.bind({final:10});
// console.log(copiaIncrementBind(50)); //salida de 60
const funObjectDosBind = object.increment.bind(object2);
console.log(funObjectDosBind(90));

//HAY DE DOS OPCIONES, ASÍ YO LO ENTIENDO
//donde puedo acceder al this(a lo que apunta) en object.nombre de la funcion -> accediendo a bind, y cambiar su propiedad
//para que a la llamada de la copia que se generó del mètodo, yo pueda acceder a ingresar
//los argumentos, en este caso step

const arr = ['Rosario', 'Fuentes', 'Garcia'];
const others = ['is', 'a', 'bitch'];

arr.push.apply(arr, others);
for (const iterable of arr) {
  console.log(`This is the resoult of: ${iterable}`);
  
}
 
const numbers = [9, 8, 1,78,6,-22, 2, 3, 5, 6, 7];

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log(max);
console.log(min);


(function(){
  console.log('this will never executed again');
})();

(() => console.log('Esto no se volverá a repetir'))();