function changeImage(_id, src) {
  document.getElementById(_id).src = src;
}

//To Get all the image elements
const images = document.querySelectorAll(".grid-item");

// Loop through each image element and add an event listener 
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    // Get the ID of the clicked image
    let id = this.id;

    // Construct the new source path based on the ID
    let src = "./IMAGES/" +  id + ".jpg";

    //Call the changeImage() function with the ID and new source 
    changeImage(id, src);
  });
}

function openOriginalPhoto(img) {
  window.open(img.src, '_blank');
}

function displayDateAndTime() {
  const currentDate = new Date();
  console.log(currentDate);
}
// if ('geolocation' in navigator) {
//   // geolocation is supported
//   navigator.geolocation.getCurrentPosition(function(position) {
//     console.log('Latitude:', position.coords.latitude);
//     console.log('Longitude:', position.coords.longitude);
//   });
// } else {
//   // geolocation is not supported
//   console.log('Geolocation is not supported');
// }
const video = document.getElementById('my-video');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playButton.textContent = 'Pause';
  } else {
    video.pause();
    playButton.textContent ='Play';
  }
});

let isClicked = false;
  function changeState() {
    const button = document.querySelector('button');
    if (isClicked) {
      // go back to original state
      button.innerText = 'Click me';
    } else {
      // change the element
      button.innerText = 'Click me again';
    }
    isClicked = !isClicked;
  }
  
function playSound () {
  let audio = document.getElementById("myAudio");
  audio.play();
}

let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
let index = 0;
function prevPhoto(){
  index--;
  if (index < 0) {
    index = photos.length - 1;
  }
  document.getElementById("gallery").src = photos[index];
}

function nextPhoto() {
  index++;
  if (index >= photos.length) {
    index = 0;
  }
  document.getElementById("gallery").src = photos[index];
}
