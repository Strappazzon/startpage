// Set a random wallpaper from the list
var images = [
	'bg1.jpg',
	'bg2.jpg',
	'bg3.jpg'
];

$('html').css({'background-image': 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
