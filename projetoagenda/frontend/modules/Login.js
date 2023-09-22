import validator from 'validator';

export default class Login { //criando a classe Login para fazer validações FrontEnd
  constructor(formClass) {
    this.form = document.querySelector(formClass); //estamos criando this.form que recebe o que vai ser passado como parametro, aqui no caso vai ser o .form-login, por isso o document.querySelector
  }

  init() {
    this.events();//esta chamando o metodo events
  }

  events() {
    if(!this.form) return; //se o form não existe não faz nada 
    this.form.addEventListener('submit', e => {//vai adicionar o evento de submit, e esta criando uma array function que tem como parametro o evento
      e.preventDefault();// quando o usuario submter o formulario vai previnir que ele seja enviado
      this.validate(e);//esta fazendo com que o metodo validate receba como paremtro o evento
    });
  }

  validate(e) {
    const el = e.target; //estamos passando o evento.target ou seja estamos pegando a tag que esta sendo submitida no caso é o form
    const emailInput = el.querySelector('input[name="email"]');//esta fazendo o el pegar o input que tem o name como email
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false; //não existe erro se existir vai virar true

    if(!validator.isEmail(emailInput.value)) {//se for diferente de validator.isEmail
      alert('E-mail inválido');
      error = true;
    }

    if(passwordInput.value.length < 3 || passwordInput.value.length > 50) { //se não tiver entre 3 e 50 caracteres vai ter um alerta de erro
      alert('Senha precisa ter entre 3 e 50 caracteres');
      error = true;
    }

    if(!error) el.submit(); //se não tiver erro vai poder enviar o formulario
  }
}
