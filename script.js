const ans = document.querySelector('#ans');
const prev = document.querySelector('#prev');

function onClickBtn({ target }) {
  const { char } = target.dataset;

  if (!char) {
    return;
  }

  if (char === '=') {
    if (!ans.value) {
      return;
    }
    prev.value = ans.value;
    ans.value = eval(ans.value);
    return;
  }

  if (char === 'AC') {
    ans.value = '';
    return;
  }

  ans.value += char;
}
