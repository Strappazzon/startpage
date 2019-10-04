let images = [ 'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg' ];

document.querySelector("html").style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(assets/img/" + images[Math.floor(Math.random() * images.length)] + ")";
