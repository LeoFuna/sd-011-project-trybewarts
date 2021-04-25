/** Verifica áreas de login */
const loginButton = document.querySelector('#login-btn');
const inputUser = document.querySelector('#login');
const inputPass = document.querySelector('#pass');

loginButton.addEventListener('click', () => {
  if (inputUser.value !== 'tryber@teste.com' && inputPass.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

/** Habilita botão de enviar ao clicar na checkbox */
/** Para realizar este requisito foi consultada a Documentação W3Schools acerca de como implementar
 * argumento "disabled" utilizando DOM.
 * Source: https://www.w3schools.com/jsref/prop_select_disabled.asp
 */
document.querySelector('#submit-btn').disabled = true;
const agreeCheck = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

agreeCheck.addEventListener('change', () => {
  if (agreeCheck.checked === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

/** Código que resolve requisito 20 */
const textArea = document.querySelector('#textarea');
const displayCount = document.querySelector('#counter');

textArea.addEventListener('keyup', () => {
  displayCount.innerText = 500 - textArea.value.length;
});

/** Código que resolve requisito 21 */
const log = [
  'Nome:',
  'Email:',
  'Casa:',
  'Familia:',
  'Matérias:',
  'Avaliação:',
  'Observações:'];
