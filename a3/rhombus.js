function generateRhombus() {
  const height = parseInt(document.getElementById('rHeight').value);
  const colorEven = document.getElementById('colorEven').value;
  const colorOdd = document.getElementById('colorOdd').value;
  const symbol = document.getElementById('symbol').value;

  const upperLeft = createHalf(height, colorEven, colorOdd, symbol, 'up', 'left');
  const lowerLeft = createHalf(height, colorEven, colorOdd, symbol, 'down', 'left');
  const upperRight = createHalf(height, colorEven, colorOdd, symbol, 'up', 'right');
  const lowerRight = createHalf(height, colorEven, colorOdd, symbol, 'down', 'right');

  let output = "";

  for (let i = 0; i < height; i++) {
    output += upperLeft[i] + "  " + upperRight[i] + "<br>";
  }

  for (let i = 0; i < height; i++) {
    output += lowerLeft[i] + "  " + lowerRight[i] + "<br>";
  }

  document.getElementById("rhombus").innerHTML = output;
}

function createHalf(height, colorEven, colorOdd, symbol, vert, horiz) {
  const lines = [];
  for (let i = 0; i < height; i++) {
    const lineIndex = vert === 'up' ? i : height - i - 1;
    const spaces = " ".repeat(horiz === 'left' ? height - lineIndex - 1 : 0);
    let line = spaces;

    for (let j = 0; j <= lineIndex; j++) {
      const color = j % 2 === 0 ? colorOdd : colorEven;
      line += `<span style="color:${color}">${symbol}</span>`;
    }

    lines.push(line);
  }
  return lines;
}
