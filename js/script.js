const btnOpenModal = document.getElementById('btn-open-modal');
const modal = document.getElementById('modal');
const input = document.getElementById('input');
const btnCancel = document.getElementById('cancel');
const btnAdd = document.getElementById('add-student');
const list = document.getElementById('list');
const btnRandom = document.getElementById('btn-select-random');

const students = [];

btnOpenModal.onclick = () => {
  modal.style.display = 'block';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

btnCancel.onclick = () => {
  input.value = '';
  modal.style.display = 'none';
};

btnAdd.onclick = () => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${input.value}`));
  li.classList.add('list');
  list.appendChild(li);
  students.push(li);
  input.value = '';
};

const selectRandom = () => {
  const count = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  const interval = setInterval(() => {
    const random = getRandom();

    if (random !== undefined) {
      highlightEl(random);

      setTimeout(() => {
        unHighlightEl(random);
      }, 300);
    }
  }, 300);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const random = getRandom();

      highlightEl(random);
    }, 300);
  }, count * 300);
};

const getRandom = () => {
  return students[Math.floor(Math.random() * students.length)];
};

const highlightEl = (el) => {
  el.classList.add('random');
};

const unHighlightEl = (el) => {
  el.classList.remove('random');
};

btnRandom.onclick = () => {
  selectRandom();
};
