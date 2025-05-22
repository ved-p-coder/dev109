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

function styledSymbol(pos, evenColor, oddColor, symbol) {
  const color = (pos % 2 === 0) ? oddColor : evenColor;
  return `<span style="color:${color}">${symbol}</span>`;
}

function upRight(height, colorEven, colorOdd, symbol) {
  let output = "";
  for (let i = 0; i < height; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += styledSymbol(j, colorEven, colorOdd, symbol);
    }
    // Add leading spaces to mirror upLeft
    output += "&nbsp;".repeat(height - i - 1) + line + "<br>";
  }
  document.getElementById("upRight").innerHTML = output;
}

function downRight(height, colorEven, colorOdd, symbol) {
  let output = "";
  for (let i = height; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += styledSymbol(j, colorEven, colorOdd, symbol);
    }
    // Add leading spaces to mirror downLeft
    output += "&nbsp;".repeat(height - i) + line + "<br>";
  }
  document.getElementById("downRight").innerHTML = output;
}

function upLeft(height, colorEven, colorOdd, symbol) {
  let output = "";
  for (let i = 0; i < height; i++) {
    for (let s = 0; s < height - i - 1; s++) {
      output += "&nbsp;";
    }
    for (let j = 0; j <= i; j++) {
      output += styledSymbol(j, colorEven, colorOdd, symbol);
    }
    output += "<br>";
  }
  document.getElementById("upLeft").innerHTML = output;
}

function downLeft(height, colorEven, colorOdd, symbol) {
  let output = "";
  for (let i = height; i > 0; i--) {
    for (let s = 0; s < height - i; s++) {
      output += "&nbsp;";
    }
    for (let j = 0; j < i; j++) {
      output += styledSymbol(j, colorEven, colorOdd, symbol);
    }
    output += "<br>";
  }
  document.getElementById("downLeft").innerHTML = output;
}
