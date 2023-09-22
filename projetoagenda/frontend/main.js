import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login'; //importando a classee Login

const login = new Login('.form-login'); //instanciando a classe Login e estamos passando como parametro a classe do formulario no html .form-login
const cadastro = new Login('.form-cadastro');

login.init(); //metodo da classe Login que faz as validações
cadastro.init();

// import './assets/css/style.css';

