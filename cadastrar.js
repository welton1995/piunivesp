const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const passwd = document.querySelector('#passwd');
const checkpasswd = document.querySelector('#checkpasswd');
const entrar = document.querySelector('#entrar');


entrar.addEventListener('click', (evento)=> {
  evento.preventDefault(); // previne o comportamento padrão do navegador
  // captura dados do usuario para cadastrar
  let usuario = {
    nome: nome.value,
    email: email.value,
    passwd: passwd.value,
    checkpasswd: checkpasswd.value,
  }
  localStorage.setItem('usuario', JSON.stringify(usuario)); // transforma em formato json
});



console.log(nome)