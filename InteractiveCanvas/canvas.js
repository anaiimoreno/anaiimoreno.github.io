const canvas = document.getElementById("sceneCanvas");
const context = canvas.getContext("2d");

const backgrounds = {
  bg1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D",  // Replace with actual image URLs
  bg2: "https://i.pinimg.com/736x/19/2b/5e/192b5ea67aa0dc0df792315d88406ab3.jpg",
  bg3: "https://media.istockphoto.com/id/178386070/photo/sinkhole-in-mexico-with-dangling-vines.jpg?s=612x612&w=0&k=20&c=FAr-0f14ijKuoJ9F8oB_TK1Ft5IB2HxByFajmd7QuDc="
};

function loadBackground(imageUrl) {
  const img = new Image();
  img.onload = () => {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = imageUrl;
}

document.getElementById("bgForm").addEventListener("change", (e) => {
  if (e.target.name === "background") {
    loadBackground(backgrounds[e.target.value]);
  }
});

// Load default background
loadBackground(backgrounds.bg1);
