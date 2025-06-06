function generateRhombus() {
  // Get user input values
  const height = parseInt(document.getElementById('rHeight').value);
  const colorEven = document.getElementById('colorEven').value;
  const colorOdd = document.getElementById('colorOdd').value;
  const symbol = document.getElementById('symbol').value;

  // Create the four sections of the rhombus
  const upperLeft = createHalf(height, colorEven, colorOdd, symbol, 'up', 'left');
  const lowerLeft = createHalf(height, colorEven, colorOdd, symbol, 'down', 'left');
  const upperRight = createHalf(height, colorEven, colorOdd, symbol, 'up', 'right');
  const lowerRight = createHalf(height, colorEven, colorOdd, symbol, 'down', 'right');

  let output = "";

  // Combine upper left and upper right halves line by line
  for (let i = 0; i < height; i++) {
    output += upperLeft[i] + "  " + upperRight[i] + "<br>";
  }

  // Combine lower left and lower right halves line by line
  for (let i = 0; i < height; i++) {
    output += lowerLeft[i] + "  " + lowerRight[i] + "<br>";
  }

  // Display the full rhombus in the output div
  document.getElementById("rhombus").innerHTML = output;
}

function createHalf(height, colorEven, colorOdd, symbol, vert, horiz) {
  const lines = [];
  for (let i = 0; i < height; i++) {
    // Determine which line to generate depending on direction
    const lineIndex = vert === 'up' ? i : height - i - 1;

    // Add spacing for alignment based on left/right side
    const spaces = " ".repeat(horiz === 'left' ? height - lineIndex - 1 : 0);
    let line = spaces;

    // Build the line with alternating colors
    for (let j = 0; j <= lineIndex; j++) {
      const color = j % 2 === 0 ? colorOdd : colorEven;
      line += `<span style="color:${color}">${symbol}</span>`;
    }

    lines.push(line); // Add the line to the array
  }
  return lines; // Return all lines for that section
}
