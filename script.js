let buttonAdd = document.querySelector('.button-add');
let buttonSubmit = document.querySelector('.button-submit');

let inputWrapper = document.querySelector('.input-wrapper');
let buttonsWrapper = document.querySelector('.buttons-wrapper');
let listWrapper = document.querySelector('.list-wrapper');

let listData = JSON.parse(localStorage.getItem('listData') || '[]');
let list = createList(listData);
let input = document.querySelector('input');

function createList(data) {
  let result = document.createElement('ul');
  listWrapper.append(result);
  data.forEach((listDataItem, index) => {
    if (!listDataItem) return;

    let item = document.createElement('li');
    item.textContent = listDataItem;
    let itemDelete = document.createElement('span');
    itemDelete.classList.add('delete');
    itemDelete.textContent = '✖';
    itemDelete.onclick = function (evt) {
      let listData = JSON.parse(localStorage.getItem('listData') || '[]');
      listData = listData.filter((el) => el && (el !== listDataItem))
      localStorage.setItem('listData', JSON.stringify(listData));

      evt.target.parentNode.remove()
    };

    item.append(itemDelete);
    result.append(item);
  })
  return result;
}



buttonAdd.onclick function() {
  buttonsWrapper.classList.add('hidden');
  inputWrapper.classList.remove('hidden');
}




buttonSubmit.onclick = function() {
  if (input.value) {
    let listData = JSON.parse(localStorage.getItem('listData') || '[]');
    let newListData = listData.concat(input.value);
    localStorage.setItem('listData', JSON.stringify(newListData));

    list.remove();
    list = createList(newListData)

    input.value = '';
  }
  buttonsWrapper.classList.remove('hidden');
  inputWrapper.classList.add('hidden');
};
