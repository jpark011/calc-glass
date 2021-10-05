const NUMS = new Array(10).fill(0).map((_, i) => i);
const OPS = ['.', 'AC', 'Del', ''];

const ans = document.querySelector('#ans');
const prev = document.querySelector('#prev');

function onClickBtn({ target }) {
  const { char } = target.dataset;

  if (!char) {
    return;
  }

  if (char === 'AC') {
    ans.value = '';
    return;
  }

  if (char === 'Del') {
    ans.value = ans.value.substring(0, ans.value.length - 1);
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

  ans.value += char;
}
