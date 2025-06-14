const scenes = [
  {
    img: 'images/scene1.png',
    items: ['Lamp', 'Book', 'Key']
    // and their area coords
  },
  {
    img: 'scene2.jpg',
    items: ['Glasses','Clock','Apple']
  },
  {
    img: 'scene3.jpg',
    items: ['Cat','Toy','Cup']
  },
  {
    img: 'scene4.jpg',
    items: ['Hat','Pen','Coin']
  }
];

let current = 0;

function initScene() {
  const sc = scenes[current];
  const game = document.getElementById('game');

  let html = '<p>Find:</p><ul id="itemList">';
  sc.items.forEach((item,idx) => {
    html += `<li id="item${idx}">${item}</li>`;
  });
  html += '</ul>';

  html += `<img src="${sc.img}" usemap="#map${current}">`;
  html += `<map name="map${current}">`;
  sc.items.forEach((item,idx) => {
    // Replace with coords from HTML Image Map tool
    html += `<area shape="rect" coords="X1,Y1,X2,Y2" data-id="item${idx}">`;
  });
  html += '</map>';

  game.innerHTML = html;

  document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', e => {
      e.preventDefault();
      const id = area.dataset.id;
      document.getElementById(id).classList.add('found');
      checkAllFound();
    });
  });
}

function checkAllFound() {
  const lis = document.querySelectorAll('#itemList li');
  const all = [...lis].every(li => li.classList.contains('found'));
  if (all) {
    if (current < scenes.length - 1) {
      document.getElementById('nextBtn').style.display = 'inline';
    } else {
      if (confirm('Congrats! Play again?'))
        location.reload();
    }
  }
}

document.getElementById('nextBtn').addEventListener('click', () => {
  current++;
  document.getElementById('nextBtn').style.display = 'none';
  initScene();
});

window.onload = initScene;
