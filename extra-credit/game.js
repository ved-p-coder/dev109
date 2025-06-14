const levels = [
  {
    image: 'level1.png',
    items: ['Seahorse', 'Anchor', 'Globe', 'Lantern'],
    coords: [
      { shape: 'rect', coords: '525,370,630,460', name: 'Seahorse' },
      { shape: 'rect', coords: '80,170,140,240', name: 'Anchor' },
      { shape: 'rect', coords: '720,300,770,360', name: 'Globe' },
      { shape: 'rect', coords: '850,460,900,530', name: 'Lantern' }
    ]
  },
  {
    image: 'level2.png',
    items: ['Red Helmet', 'Baseball', 'Toy Car', 'Shuttlecock'],
    coords: [
      { shape: 'rect', coords: '300,40,400,130', name: 'Red Helmet' },
      { shape: 'rect', coords: '180,100,240,160', name: 'Baseball' },
      { shape: 'rect', coords: '580,200,620,240', name: 'Toy Car' },
      { shape: 'rect', coords: '640,60,700,120', name: 'Shuttlecock' }
    ]
  },
  {
    image: 'level3.png',
    items: ['Green Flag', 'Shield', 'Bow and Arrow', 'Bucket'],
    coords: [
      { shape: 'rect', coords: '780,30,860,100', name: 'Green Flag' },
      { shape: 'rect', coords: '180,540,270,610', name: 'Shield' },
      { shape: 'rect', coords: '860,610,950,680', name: 'Bow and Arrow' },
      { shape: 'rect', coords: '270,560,320,640', name: 'Bucket' }
    ]
  }
];

let currentLevel = 0;
let foundCount = 0;

function loadLevel(levelIndex) {
  const level = levels[levelIndex];
  const image = document.getElementById('spyImage');
  const map = document.getElementById('imageMap');
  const itemList = document.getElementById('itemList');
  const nextButton = document.getElementById('nextButton');

  image.src = level.image;
  map.innerHTML = '';
  itemList.innerHTML = '';
  foundCount = 0;
  nextButton.style.display = 'none';

  level.items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.id = item;
    itemList.appendChild(li);
  });

  level.coords.forEach(obj => {
    const area = document.createElement('area');
    area.shape = obj.shape;
    area.coords = obj.coords;
    area.href = '#';
    area.addEventListener('click', function (e) {
      e.preventDefault();
      foundItem(obj.name);
    });
    map.appendChild(area);
  });
}

function foundItem(name) {
  const item = document.getElementById(name);
  if (item && item.style.textDecoration !== 'line-through') {
    item.style.textDecoration = 'line-through';
    foundCount++;
  }
  if (foundCount === 4) {
    document.getElementById('nextButton').style.display = 'inline-block';
  }
}

function nextLevel() {
  currentLevel++;
  if (currentLevel < levels.length) {
    loadLevel(currentLevel);
  } else {
    if (confirm("You won! Play again?")) {
      location.reload();
    }
  }
}

document.getElementById('nextButton').addEventListener('click', nextLevel);
window.onload = () => loadLevel(currentLevel);
