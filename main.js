var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

var imgArray = [];
imgArray.push("images/pic1.jpg");
imgArray.push("images/pic2.jpg");
imgArray.push("images/pic3.jpg");
imgArray.push("images/pic4.jpg");
imgArray.push("images/pic5.jpg");

/* Looping through images */

  thumbBar.innerHTML = "";
  for (let i = 0; i < imgArray.length; i++) {
    var imageSrc = imgArray[i];
    var newImage = document.createElement('img');
    newImage.setAttribute('src', imageSrc);
    //newImage.setAttribute('onclick', 'imageClick(this)');
    newImage.addEventListener('click', imageClick, false);
    thumbBar.appendChild(newImage);
  }

function imageClick (e){
  var src = e.target.getAttribute('src');
  displayedImage.setAttribute('src', src);
}

/* Wiring up the Darken/Lighten button */

//btn.addEventListener('click', btn.getAttribute('class')) 
btn.onclick = function() {
var darkLight = btn.getAttribute('class')
if (darkLight === 'dark') {
  btn.setAttribute('class', 'light');
  btn.textContent = 'Lighten';
  overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
} else {
  btn.setAttribute('class', 'dark');
  btn.textContent = 'Darken';
  overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}


