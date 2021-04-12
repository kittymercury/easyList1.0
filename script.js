let buttonAdd = document.querySelector('.button-add');
let buttonSubmit = document.querySelector('.button-submit');

let inputWrapper = document.querySelector('.input-wrapper');
let buttonsWrapper = document.querySelector('.buttons-wrapper');

let list = document.querySelector('ul');
let input = document.querySelector('input');

buttonAdd.onclick = function() {
  buttonsWrapper.classList.add('hidden');
  inputWrapper.classList.remove('hidden');
}

buttonSubmit.onclick = function() {
  if (input.value) {
    let item = document.createElement('li');
    item.textContent = input.value;
    list.append(item);
    input.value = '';
  }
  buttonsWrapper.classList.remove('hidden');
  inputWrapper.classList.add('hidden');
};
