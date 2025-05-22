const canvas = document.getElementById("sceneCanvas");
const context = canvas.getContext("2d");

const backgrounds = {
  bg1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D",  // Replace with actual image URLs
  bg2: "https://i.pinimg.com/736x/19/2b/5e/192b5ea67aa0dc0df792315d88406ab3.jpg",
  bg3: "https://media.istockphoto.com/id/178386070/photo/sinkhole-in-mexico-with-dangling-vines.jpg?s=612x612&w=0&k=20&c=FAr-0f14ijKuoJ9F8oB_TK1Ft5IB2HxByFajmd7QuDc="
};

let character = {
  x: 230,  
  y: 150,   
  size: 40
};

function loadBackground(imageUrl, callback) {
  const img = new Image();
  img.onload = () => {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    if(callback) callback();
  };
  img.src = imageUrl;
}


function drawCharacter() {
  context.beginPath();
  context.fillStyle = "black";
  context.arc(character.x + character.size/2, character.y + character.size/2, character.size/2, 0, Math.PI * 2);
  context.fill();
}


function redraw() {
  loadBackground(backgrounds[document.querySelector('input[name="background"]:checked').value], drawCharacter);
}


document.getElementById("bgForm").addEventListener("change", () => {
  redraw();
});


document.getElementById("position").addEventListener("input", (e) => {
  if (e.target.id === "xPos") {
    character.x = parseInt(e.target.value);
  } else if (e.target.id === "yPos") {
    character.y = parseInt(e.target.value);
  }
  redraw();
});

redraw();

const items = {
  item1: { visible: true, x: 50, y: 50, color: "pink" },
  item2: { visible: true, x: 150, y: 70, color: "red" },
  item3: { visible: true, x: 300, y: 100, color: "white" }
};

function drawItems() {
  for (const [key, item] of Object.entries(items)) {
    if (item.visible) {
      context.fillStyle = item.color;
      context.fillRect(item.x, item.y, 30, 30);
    }
  }
}

document.getElementById("showItems").addEventListener("change", (e) => {
  if (e.target.name === "item") {
    items[e.target.value].visible = e.target.checked;
    redraw();
  }
});

// Modify redraw() to also draw items
function redraw() {
  loadBackground(backgrounds[document.querySelector('input[name="background"]:checked').value], () => {
    drawCharacter();
    drawItems();
  });
}

const sounds = {
  sound1: new Audio("sounds/beach.mp3"),
  sound2: new Audio("sounds/wind.mp3"),
  sound3: new Audio("sounds/water.mp3")
};

document.getElementById("sound1").addEventListener("click", () => {
  sounds.sound1.play();
});

document.getElementById("sound2").addEventListener("click", () => {
  sounds.sound2.play();
});

document.getElementById("sound3").addEventListener("click", () => {
  sounds.sound3.play();
});

;



