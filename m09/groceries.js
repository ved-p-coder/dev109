function addItem() {
  const input = document.getElementById("itemInput");
  const message = document.getElementById("message");
  const itemText = input.value.trim();

  try {
    if (!itemText) {
      throw new Error("Empty input is not allowed.");
    }

    const newEl = document.createElement("li");
    const newText = document.createTextNode(itemText);
    newEl.appendChild(newText);

    const ul = document.getElementById("todo");
    ul.appendChild(newEl);

  } catch (e) {
    console.log(e);
  } finally {
    if (!itemText) {
      message.textContent = "Please enter a grocery item before adding.";
      return; // stop execution
    } else {
      message.textContent = "";
    }

    // Extra credit: Clear the input box
    input.value = "";
  }
}
