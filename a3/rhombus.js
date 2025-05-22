function createRhombus() {
  const height = parseInt(document.getElementById("rHeight").value);
  const colorEven = document.getElementById("colorEven").value;
  const colorOdd = document.getElementById("colorOdd").value;
  const symbol = document.getElementById("symbol").value;

  upRight(height, colorEven, colorOdd, symbol);
  downRight(height, colorEven, colorOdd, symbol);
  upLeft(height, colorEven, colorOdd, symbol);
  downLeft(height, colorEven, colorOdd, symbol);
}

function upRight(h, evenColor, oddColor, symbol) {
  let result = "";
  for (let i = 0; i < h; i++) {
    for (let j = 0; j <= i; j++) {
      result += styledSymbol(j, evenColor, oddColor, symbol);
    }
    result += "\n";
  }
  document.getElementById("upRight").innerHTML = result;
}

function downRight(h, evenColor, oddColor, symbol) {
  let result = "";
  for (let i = h; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result += styledSymbol(j, evenColor, oddColor, symbol);
    }
    result += "\n";
  }
  document.getElementById("downRight").innerHTML = result;
}

function upLeft(h, evenColor, oddColor, symbol) {
  let result = "";
  for (let i = 0; i < h; i++) {
    for (let s = 0; s < h - i - 1; s++) result += " ";
    for (let j = 0; j <= i; j++) {
      result += styledSymbol(j, evenColor, oddColor, symbol);
    }
    result += "\n";
  }
  document.getElementById("upLeft").innerHTML = result;
}

function downLeft(h, evenColor, oddColor, symbol) {
  let result = "";
  for (let i = h; i > 0; i--) {
    for (let s = 0; s < h - i; s++) result += " ";
    for (let j = 0; j < i; j++) {
      result += styledSymbol(j, evenColor, oddColor, symbol);
    }
    result += "\n";
  }
  document.getElementById("downLeft").innerHTML = result;
}

function styledSymbol(pos, evenColor, oddColor, symbol) {
  const color = (pos % 2 === 0) ? oddColor : evenColor;
  return `<span style="color:${color}">${symbol}</span>`;
}
