const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");


//background
var backgroud = new Image();
background.src = 'sceneImages/beach.jpg';

background.onload = function () {
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  };


//forground images
var image1 = new Image();
var image2 = new Image();

image1.src = 'sceneImages/dolphin.png';
image2.src = 'sceneImages/sandcastle.jpg.avif';

image1.onload = function () {
    context.drawImage(image1, 100, 300, 150, 200);
  };

  image2.onload = function () {
    context.drawImage(image2, 500, 350, 100, 150);

  };

  context.font = '24px Arial';
  context.fillStyle = 'white';
  context.fillText('Anai Moreno', 20, 40);
  context.fillText('Forest Adventure Scene', 20, 70);








