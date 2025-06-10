const clearButton = document.getElementById("clearButton");
const colorPicker = document.getElementById("color");
const sizeInput = document.getElementById("size");

// Clear all dots
clearButton.addEventListener("click", function(event) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.remove());

  // Stop propagation so no new dot is created when clicking this button
  event.stopPropagation();
});

// Draw a dot on body click
document.addEventListener("click", function(event) {
  const dot = document.createElement("div");
  dot.className = "dot";

  const size = parseInt(sizeInput.value);
  const color = colorPicker.value;

  dot.style.width = size + "px";
  dot.style.height = size + "px";
  dot.style.backgroundColor = color;
  dot.style.left = (event.pageX - size / 2) + "px";
  dot.style.top = (event.pageY - size / 2) + "px";

  document.body.appendChild(dot);
});
