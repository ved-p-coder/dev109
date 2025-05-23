function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  let output = "";
  const totalHeight = pHeight * 2;

  for (let i = 0; i < totalHeight; i++) {
    let row = "";

    const rowIndex = i < pHeight ? i : totalHeight - i - 1;
    const numSymbols = rowIndex + 1;
    const padding = pHeight - rowIndex - 1;

    // Left side spacing
    row += "&nbsp;".repeat(padding * 2);

    // Left half
    for (let j = 0; j < numSymbols; j++) {
      const color = (j % 2 === 0) ? pColorOdd : pColorEven;
      row += `<span style="color:${color};">${pSymbol}</span>`;
    }

    // Right half
    for (let j = 0; j < numSymbols; j++) {
      const color = (j % 2 === 0) ? pColorOdd : pColorEven;
      row += `<span style="color:${color};">${pSymbol}</span>`;
    }

    output += row + "<br>";
  }

  document.getElementById("rhombus").innerHTML = output;
}
