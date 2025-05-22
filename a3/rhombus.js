function createRhombus() {
  const height = parseInt(document.getElementById('rHeight').value);
  const colorEven = document.getElementById('colorEven').value;
  const colorOdd = document.getElementById('colorOdd').value;
  const symbol = document.getElementById('symbol').value;

  upLeft(height, colorEven, colorOdd, symbol);
  upRight(height, colorEven, colorOdd, symbol);
  downLeft(height, colorEven, colorOdd, symbol);
  downRight(height, colorEven, colorOdd, symbol);
}

function upLeft(height, even, odd, symbol) {
  let result = '';
  for (let i = 0; i < height; i++) {
    result += '&nbsp;'.repeat(height - i - 1);
    for (let j = 0; j <= i; j++) {
      const color = j % 2 === 0 ? odd : even;
      result += `<span style="color:${color};">${symbol}</span>`;
    }
    result += '<br>';
  }
  document.getElementById('upLeft').innerHTML = result;
}

function upRight(height, even, odd, symbol) {
  let result = '';
  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      const color = j % 2 === 0 ? odd : even;
      result += `<span style="color:${color};">${symbol}</span>`;
    }
    result += '<br>';
  }
  document.getElementById('upRight').innerHTML = result;
}

function downLeft(height, even, odd, symbol) {
  let result = '';
  for (let i = height; i > 0; i--) {
    result += '&nbsp;'.repeat(height - i);
    for (let j = 0; j < i; j++) {
      const color = j % 2 === 0 ? odd : even;
      result += `<span style="color:${color};">${symbol}</span>`;
    }
    result += '<br>';
  }
  document.getElementById('downLeft').innerHTML = result;
}

function downRight(height, even, odd, symbol) {
  let result = '';
  for (let i = height; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const color = j % 2 === 0 ? odd : even;
      result += `<span style="color:${color};">${symbol}</span>`;
    }
    result += '<br>';
  }
  document.getElementById('downRight').innerHTML = result;
}
