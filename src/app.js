// main.js
import { Cat } from './zoo/cat';

var myCat = new Cat('Bugsy');
document.getElementById('content').innerHTML += `XXX <br/>${myCat.meow()}`;



