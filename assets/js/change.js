let firstImage = document.querySelector('img');

firstImage.addEventListener('click', change);

function change() {
  let isrc = firstImage.getAttribute('src');
  if (isrc == '/assets/images/image.jpg')
    firstImage.setAttribute('src', '/assets/images/image100.jpg');
  else
    firstImage.setAttribute('src', '/assets/images/image.jpg');
}
