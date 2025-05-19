
const Info = document.getElementById("Information");
const Gallery = document.getElementById("Gallery");
const clickSound = document.getElementById("clickSound");

const form = document.querySelector("form");
const mainHeader = document.querySelector("h1");
const subHeader = document.querySelector("h2");

const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");


const artistNames = {
    Monet: "Claude Monet",
    Vinci: "Leonardo da Vinci",
    Picasso: "Pablo Picasso",
    Gogh: "Vincent van Gogh"
  };


const painters = {
    Monet:  `
    Claude Monet was born in Paris in 1840.
    Claude Monet was famous for being a leading French Impressionist
     painter and for his innovative style that focused on capturing 
     fleeting moments of light and color in his paintings.   
     Monet embraced the practice of painting outdoors, en plein air, 
     allowing him to directly observe and capture the effects of light and atmosphere.
     Monet's innovative approach to painting, his emphasis on 
     light and color, and his willingness to experiment with form paved the way for
      many developments in modern and contemporary art. He died Decemebr 5th, 1926. 
     
   `,
    Vinci: `
    Leonardo da Vinci was born in the Republic of Florence, Italy, on April 15, 1452.
    Leonardo was an Italian painter, draftsman, sculptor and architect. 
    Leonardo da Vinci was famous for his artistic genius, particularly his 
    paintings like the Mona Lisa and The Last Supper, as well as his innovative
    inventions and scientific explorations. Da Vinci's ability to excel in multiple fields, 
    including art, engineering, and science, earned him the title of "Renaissance Man," a symbol of intellectual versatility. 
    He died May 2nd, 1519.  
     
   `,
    Picasso: 
    `
    Pablo Picasso was born in Malaga, Spain, on October 25th, 1881. 
    Pablo Picasso is famous for being one of the most influential
     artists of the 20th century, particularly for his co-founding of the Cubist 
     movement with Georges Braque, his invention of constructed sculpture, and the wide 
     variety of styles he developed and explored. Picasso's work is a cornerstone of 
     modern art, influencing countless artists and art movements. His Cubist style 
     continues to inspire and inform contemporary artists, and his exploration of different 
     perspectives and mediums has left a lasting mark on the art world. 
     
   `,
    Gogh: 
    `
    Vincent van Gogh was born in Zundert, Netherlands, on March 30th, 1853. 
    Pablo Picasso is famous for being one of the most influential artists of the 20th 
    century, particularly for his co-founding of the Cubist movement with Georges Braque, 
    his invention of constructed sculpture, and the wide variety of styles he developed and
    explored. 

   `,
};

document.querySelectorAll('input[name="artist"]').forEach(radio => {
    radio.addEventListener("change", () => {
        const pick = radio.value;
        Info.textContent = painters[pick];
        Gallery.innerHTML = ""; 
        canvas.style.display = "none";
    });
});


// Sidebar toggle
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  // Auto-close sidebar when a nav link is clicked
  document.querySelectorAll(".sidenav a").forEach(link => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });


  // Gallery images for sidebar selections
const paintings = {
    Monet: [
      { title: "Impression, Sunrise (1872)", url:"https://fs.artdevivre.com/storage/articles/events-article/a-monet/da9a7ab26c07319496ac3b8294361ca3.jpg"},
      { title: "Water Lilies (1896-1926)", url:"https://fs.artdevivre.com/storage/articles/events-article/a-monet/a324e00fc42cf6c62f86ed97c74fb422.jpg"},
      { title: "Japanese Bridge over a Pond of Water Lilies (1899)", url:"https://fs.artdevivre.com/storage/articles/events-article/a-monet/1c4e9d2b5ee611aac5095c4ee84cbaa2.jpg"},
      { title: "La Grenouillère (1869)", url:"https://fs.artdevivre.com/storage/articles/events-article/a-monet/4b00c4754fdd6fb41428b8f55790f294.jpg"}
    ],
    Vinci: [
      { title: "Mona Lisa (c. 1503-19)", url:"https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg "}, 
      { title: "Last Supper (c. 1495-98)", url:" https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg"}, 
      { title: "Vitruvian Man (c. 1490)", url:" https://cdn.britannica.com/68/145968-050-01768DAD/Vitruvian-Man-Leonardo-da-Vinci-Gallerie-dellAccademia.jpg"},
      { title: "Lady with an Ermine (c. 1489-91)", url:" https://cdn.britannica.com/46/198846-050-82EE84FC/Lady-Ermine-oil-panel-Leonardo-da-Vinci.jpg"}, 
    ],
    Picasso: [
      { title: "Guernica (1973)", url: "https://galeriemontblanc.com/cdn/shop/files/Guernica.webp?v=1704581987&width=1500"},
      { title: "The Old Guitarist (1903)", url:"https://www.singulart.com/blog/wp-content/uploads/2023/12/The-Old-Guitarist-scaled.jpg"},
      { title: "The Weeping Woman (1937)", url:"https://www.singulart.com/blog/wp-content/uploads/2023/12/The-Weeping-Woman-1140x1425.jpg "}, 
      { title: "The Kiss (1969)", url:"https://www.singulart.com/blog/wp-content/uploads/2023/12/The-Kiss.jpg "}
    ],
    Gogh: [
     { title: "Starry Night (1889)", url: "https://usercontent.one/wp/magazine.artland.com/wp-content/uploads/2022/03/starry_night.jpg?media=1690186145"}, 
     { title: "Sunflowers (1889)", url: "https://usercontent.one/wp/magazine.artland.com/wp-content/uploads/2022/03/sunflowers.jpg?media=1690186145 "}, 
     { title: "Self-Portrait (1889)", url: " https://usercontent.one/wp/magazine.artland.com/wp-content/uploads/2022/03/self_portrait.jpg?media=1690186145"}, 
     { title: "The Potato Eaters (1885)", url: "https://usercontent.one/wp/magazine.artland.com/wp-content/uploads/2022/06/vincent-van-gogh-the-potato-eaters-1.jpg?media=1690186145 "}
    ]
  };
  

  // Display gallery from sidebar selection
document.querySelectorAll(".sidenav a[data-artist]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const artist = link.getAttribute("data-artist");

     // If 'Home' was clicked (no artist)
    if (!artist) {
        Info.textContent = "";
        Gallery.innerHTML = "";
        canvas.style.display = "none";
        context.clearRect(0, 0, canvas.width, canvas.height);
        form.style.display = "block"; // show radio buttons
        mainHeader.style.display = "block";
        subHeader.style.display = "block";

        return;
      }
  
      e.preventDefault();
      clickSound.currentTime = 0;
      clickSound.play();
  
      // Hide radio buttons
      form.style.display = "none";
      mainHeader.style.display = "none";
      subHeader.style.display = "none";
  
      // Clear text content
      Info.innerHTML = "";


      //images
      Gallery.innerHTML = `<h2>${artistNames[artist]}</h2>`;


      closeNav();
      drawCanvasForArtist(artist);
      Gallery.scrollIntoView({ behavior: "smooth" });
    });
  });

  function drawCanvasForArtist(artist) {

    const imgs = paintings[artist];
    const imageWidth = 360;
    const imageHeight = 250;
    const gapX = 30;
    const gapY = 70;
    const columns = 2;

    const rows = Math.ceil(imgs.length / columns);
    const totalHeight = 60 + rows * (imageHeight + gapY) + 50;
    canvas.width = columns * (imageWidth + gapX);
    canvas.height = totalHeight;

    canvas.style.display = "block";
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = "24px Arial";
    context.fillStyle = "#ffffff";
    context.textAlign = "left";
    context.fillText(`Famous Pieces`, 10, 40);

    

    imgs.forEach((item, index) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      const x = 20 + col * (imageWidth + gapX);
      const y = 60 + row * (imageHeight + gapY);

      context.drawImage(img, x, y, imageWidth, imageHeight);

      context.font = "16px Arial";
      context.fillStyle = "#ffffff";
      context.textAlign = "center";
      context.fillText(item.title, x + imageWidth / 2, y + imageHeight + 20);
    };

    img.src = item.url.trim();

     
    });
  }
  
