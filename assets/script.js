const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
const containerdots = document.querySelector('.dots');
const img = document.querySelector('.banner-img');
const tagline = document.querySelector('#banner p')
let indexslide = 0;

//EVENT LISTENER 

// Event listenr flèche de gauche
arrowleft.addEventListener("click",  () => {
	if (indexslide === 0) {
		indexslide = slides.length -1;
	} else {
		indexslide--;
	}
	img.src = `./assets/images/slideshow/${slides[indexslide].image}`;
	tagline.innerHTML = slides[indexslide].tagLine;
	dotselect();
	console.log("clique flèche de gauche");
});

// Event listener flèche de droite
arrowright.addEventListener("click",  () => {
	if (indexslide === slides.length -1) {
		indexslide = 0;
	} else {
		indexslide++;
	}
	img.src = `./assets/images/slideshow/${slides[indexslide].image}`;
	tagline.innerHTML = slides[indexslide].tagLine;
	dotselect();
	console.log("clique flèche de droite");
});

// BULLET POINT

// Ajout d'une dot par images du tableau slides
slides.map((image) => {
	const Dot = document.createElement('div');
	Dot.classList = 'dot';
	containerdots.appendChild(Dot);
});

// Ajout de la dot en cours de visionnage sur la 1ére image
const dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

// Ajout fonction pour changer la dot en cours de visionnage
function dotselect() {
	for (let i = 0; i < dots.length; i++) {
		if (i === indexslide) {
			dots[i].classList.add('dot_selected');
		} else {
			dots[i].classList.remove('dot_selected');
		}
	}
}