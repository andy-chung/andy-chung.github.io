let firstImage = document.querySelector('img');

firstImage.addEventListener('click', change);

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  let randomInt = getRandomInt(7);
  switch (randomInt) {
    case 0:
      firstImage.setAttribute('src', '/assets/images/image000.jpg');
      break;
    case 1:
      firstImage.setAttribute('src', '/assets/images/image100.jpg');
      break;
    case 2:
      firstImage.setAttribute('src', '/assets/images/image200.jpg');
      break;
    case 3:
      firstImage.setAttribute('src', '/assets/images/image300.jpg');
      break;
    case 4:
      firstImage.setAttribute('src', '/assets/images/image400.jpg');
      break;
    case 5:
      firstImage.setAttribute('src', '/assets/images/image500.jpg');
      break;
    case 6:
      firstImage.setAttribute('src', '/assets/images/image600.jpg');
      break;
    default:
      firstImage.setAttribute('src', '/assets/images/image000.jpg');
      break;

  }
});


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function change() {
  let isrc = firstImage.getAttribute('src');
  if (isrc == '/assets/images/image000.jpg')
    firstImage.setAttribute('src', '/assets/images/image100.jpg');
  else if (isrc == '/assets/images/image100.jpg')
    firstImage.setAttribute('src', '/assets/images/image200.jpg');
  else if (isrc == '/assets/images/image200.jpg')
    firstImage.setAttribute('src', '/assets/images/image300.jpg');
  else if (isrc == '/assets/images/image300.jpg')
    firstImage.setAttribute('src', '/assets/images/image400.jpg');
  else if (isrc == '/assets/images/image400.jpg')
    firstImage.setAttribute('src', '/assets/images/image500.jpg');
  else if (isrc == '/assets/images/image500.jpg')
    firstImage.setAttribute('src', '/assets/images/image600.jpg');
  else
    firstImage.setAttribute('src', '/assets/images/image000.jpg');
}
