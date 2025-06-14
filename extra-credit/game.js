const levels = [
  {
    id: "level1",
    items: ["anchor", "globe", "lantern", "seahorse"]
  },
  {
    id: "level2",
    items: ["hat", "ball", "rocket", "baseball"]
  },
  {
    id: "level3",
    items: ["shield", "pin", "bow", "falcon"]
  }
];

let currentLevel = 0;
let foundItems = [];

function loadLevel(levelIndex) {
  // Hide all levels
  document.querySelectorAll('.level').forEach(el => el.classList.add('hidden'));
  // Show current level
  document.getElementById(levels[levelIndex].id).classList.remove('hidden');

  // Load item list
  const list = document.getElementById('items-list');
  list.innerHTML = "";
  foundItems = [];

  levels[levelIndex].items.forEach(itemId => {
    const li = document.createElement('li');
    li.id = `item-${itemId}`;
    li.textContent = itemId;
    list.appendChild(li);

    const el = document.getElementById(itemId);
    el.addEventListener("click", function () {
      foundItem(itemId);
    }, { once: true }); // prevents double clicking
  });

  document.getElementById("nextLevel").classList.add("hidden");
}

function foundItem(itemId) {
  const item = document.getElementById(`item-${itemId}`);
  item.classList.add("found");
  foundItems.push(itemId);

  if (foundItems.length === 4) {
    if (currentLevel < levels.length - 1) {
      document.getElementById("nextLevel").classList.remove("hidden");
    } else {
      document.getElementById("winMessage").classList.remove("hidden");
    }
  }
}

function replay() {
  location.reload();
}

document.getElementById("nextLevel").addEventListener("click", () => {
  currentLevel++;
  loadLevel(currentLevel);
});

// Load first level on page load
loadLevel(currentLevel);
