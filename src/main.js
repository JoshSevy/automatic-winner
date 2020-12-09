// Create variables targetting the relevant DOM elements here 👇
let mainCoverImage = document.querySelector('.cover-image')
let mainCoverTitle = document.querySelector('.cover-title');
let mainCoverTag1 = document.querySelector('.tagline-1');
let mainCoverTag2 = document.querySelector('.tagline-2');

let btnControls = document.querySelector('.controls');
let randomCoverBtn = document.querySelector('.random-cover-button');
let makeCoverBtn = document.querySelector('.make-new-button');
let savedCoversBtn = document.querySelector('.view-saved-button');
let saveBtn = document.querySelector('.save-cover-button');
let homeBtn = document.querySelector('.home-button');

let homeView = document.querySelector('.home-view');
let formView = document.querySelector('.form-view');
let savedView = document.querySelector('.saved-view');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

getRandomCover();

var currentCover;

// Add your event listeners here 👇

randomCoverBtn.addEventListener('click',function() {
  getRandomCover();
});

btnControls.addEventListener('click', function(event) {
  changeView(event)
})


// Create your event handlers and other functions here 👇

function changeView(event) {
  if (event.target.className === 'make-new-button') {
    homeView.classList.add('hidden');
    formView.classList.remove('hidden');
    makeCoverBtn.classList.add('hidden');
    homeBtn.classList.remove('hidden');
    saveBtn.classList.add('hidden');
    randomCoverBtn.classList.add('hidden');
  }

  if (event.target.className === 'home-button') {
    homeView.classList.remove('hidden');
    formView.classList.add('hidden');
    makeCoverBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
    randomCoverBtn.classList.remove('hidden');
  }
  
}


function getRandomCover() {
  var randomCover = new Cover(
  covers[getRandomIndex(covers)], 
  titles[getRandomIndex(titles)], 
  descriptors[getRandomIndex(descriptors)],
  descriptors[getRandomIndex(descriptors)]
  ); 

  currentCover = randomCover;

  mainCoverImage.src = currentCover.cover;
  mainCoverTitle.innerHTML = currentCover.title;
  mainCoverTag1.innerHTML = currentCover.tagline1;
  mainCoverTag2.innerHTML = currentCover.tagline2;
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
