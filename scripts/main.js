document.querySelector('h').onclick = function() {
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