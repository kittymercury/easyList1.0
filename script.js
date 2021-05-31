let buttonAdd = document.querySelector('.button-add');
let buttonSubmit = document.querySelector('.button-submit');

let inputWrapper = document.querySelector('.input-wrapper');
let buttonsWrapper = document.querySelector('.buttons-wrapper');
let listWrapper = document.querySelector('.list-wrapper');

let input = document.querySelector('input');

function selectData() {
  let data = localStorage.getItem('data');
  if (!data) {
    return []
  }
  return data.split(',')
}

function updateData(string) {
  let data = selectData();
  data.push(string);
  localStorage.setItem('data', data);
  return data;
}

function deleteData(string) {
  let data = selectData();
  data = data.filter((el) => !['', string].includes(el))
  localStorage.setItem('data', data);
  return data;
}

function renderData(data) {
  let list = document.querySelector('.list');
  list.remove()
  list = document.createElement('ul');
  list.classList.add('list');

  data.forEach((string) => {
    let item = document.createElement('li');
    item.textContent = string;
    let itemDelete = document.createElement('span');
    itemDelete.classList.add('delete');
    itemDelete.textContent = '✖';
    itemDelete.onclick = function (evt) {
      renderData(deleteData(string))
    };
    item.append(itemDelete);
    list.append(item);
  })

  listWrapper.append(list);
}

buttonAdd.onclick = function() {
  buttonsWrapper.classList.add('hidden');
  inputWrapper.classList.remove('hidden');
  input.focus();
}

buttonSubmit.onclick = function() {
  let value = (input.value || '').trim();
  if (value) {
    renderData(updateData(value))
    input.value = '';
  }
  buttonsWrapper.classList.remove('hidden');
  inputWrapper.classList.add('hidden');
};

renderData(selectData())
