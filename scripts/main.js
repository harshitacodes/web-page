document.querySelector('h5').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefoxx.png') {
      myImage.setAttribute('src','images/animated.png');
    } else {
      myImage.setAttribute('src','images/firefoxx.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h5');


function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla Firefoxx is cool, ' + myName;
  }

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla Firefoxx is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }

function setUserName() {
let myName = prompt('Please enter your name.');
if(!myName) {
    setUserName();
} else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
}