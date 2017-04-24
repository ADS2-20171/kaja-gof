// cat.js
export class Cat {
  constructor(name) {
  	this.name = name;
  }

  meow() {
    return `${this.name}: Tienes que estar bromeando que te obedeceré, ¿verdad?`;
  }
}
/////////////////////////////////////////////

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
/*
setInterval(() => {
  usuario_list.push(loadUser());
  for (var i=usuario_list.length-1; i<usuario_list.length; i++) {    
    sendNotify(usuario_list[i]);
  }
}, 2000);
*/
var usuarios = Rx.Observable.create( (nuevoUser) => {
  setInterval(() => {
    nuevoUser.next(loadUser());
    nuevoUser.next(loadUser());
  }, 2000);
});

usuarios.subscribe((id) => {
  sendNotify(id);
});