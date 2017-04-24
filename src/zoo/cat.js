// cat.js
export class Cat {
  constructor(name) {
  	this.name = name;
  }

  meow() {
    return `${this.name}: Tienes que estar bromeando que te obedeceré, ¿verdad?`;
  }
}


function sendNotify(id) {
    console.log(`Usuario ${id} notificado`);
}

function loadUser() {
    console.log('Leyendo nuevo usuario');
    let min = 12345;
    let max = 23456;
    return Math.floor(Math.random() * (max - min)) + min;
}


let usuario_list = [];

usuario_list.push(loadUser());

sendNotify(usuario_list[0]);

