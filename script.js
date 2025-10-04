'use strict';

const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// console.log(closeModal);
// console.log(modal);
const showModal = document.querySelectorAll('.show-modal');
console.log(showModal);

const removeHidden = function () {
  // console.log('test');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addHidden = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  console.log(showModal[i].textContent);
  showModal[i].addEventListener('click', removeHidden);
}

closeModal.addEventListener('click', addHidden);
overlay.addEventListener('click', addHidden);
document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) addHidden();
  }
});
