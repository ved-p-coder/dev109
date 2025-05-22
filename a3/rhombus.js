function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rhombusStr = "";

  // Top half
  for (let i = 0; i < pHeight; i++) {
    rhombusStr += "&nbsp;".repeat((pHeight - i - 1) * 2); // padding
    for (let j = 0; j <= i; j++) {
      const color = (j % 2 === 0) ? pColorOdd : pColorEven;
      rhombusStr += `<span style="color:${color}">${pSymbol}</span>&nbsp;`;
    }
    rhombusStr += "<br>";
  }

  // Bottom half
  for (let i = pHeight - 2; i >= 0; i--) {
    rhombusStr += "&nbsp;".repeat((pHeight - i - 1) * 2);
    for (let j = 0; j <= i; j++) {
      const color = (j % 2 === 0) ? pColorOdd : pColorEven;
      rhombusStr += `<span style="color:${color}">${pSymbol}</span>&nbsp;`;
    }
    rhombusStr += "<br>";
  }

  document.getElementById("rhombus").innerHTML = rhombusStr;
}
