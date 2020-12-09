// Create variables targetting the relevant DOM elements here 👇
// Main Cover Display
let mainCoverImage = document.querySelector('.cover-image')
let mainCoverTitle = document.querySelector('.cover-title');
let mainCoverTag1 = document.querySelector('.tagline-1');
let mainCoverTag2 = document.querySelector('.tagline-2');

//Saved Covers Display

let savedCoversSection = document.querySelector('.saved-covers-section');

// Buttons 
let btnControls = document.querySelector('.controls');
let randomCoverBtn = document.querySelector('.random-cover-button');
let makeCoverBtn = document.querySelector('.make-new-button');
let savedCoversBtn = document.querySelector('.view-saved-button');
let saveBtn = document.querySelector('.save-cover-button');
let createBookBtn = document.querySelector('.create-new-book-button');
let homeBtn = document.querySelector('.home-button');

// Page views
let homeView = document.querySelector('.home-view');
let formView = document.querySelector('.form-view');
let savedView = document.querySelector('.saved-view');

// Form Inputs
let userCover = document.querySelector('.user-cover');
let userTitle = document.querySelector('.user-title');
let userDesc1 = document.querySelector('.user-desc1');
let uersDesc2 = document.querySelector('.user-desc2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


var currentCover = newRandomCover();

displayCurrentCover()

// Add your event listeners here 👇

randomCoverBtn.addEventListener('click',function() {
  currentCover = newRandomCover();
  displayCurrentCover();
});

btnControls.addEventListener('click', function(event) {
  if (event.target.className !== 'save-cover-button') {
    changeView(event)
  }

  if (event.target.className === 'save-cover-button') {
    saveMainCover()
  }
});

// Create your event handlers and other functions here 👇

function changeView(event) {
  if (event.target.className === 'make-new-button') {
    homeView.classList.add('hidden');
    formView.classList.remove('hidden');
    savedView.classList.add('hidden');

    makeCoverBtn.classList.add('hidden');
    homeBtn.classList.remove('hidden');
    saveBtn.classList.add('hidden');
    randomCoverBtn.classList.add('hidden');
  }

  if (event.target.className === 'home-button') {
    homeView.classList.remove('hidden');
    formView.classList.add('hidden');
    savedView.classList.add('hidden');

    makeCoverBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
    randomCoverBtn.classList.remove('hidden');
  }

  if (event.target.className === 'view-saved-button') {
    homeView.classList.add('hidden');
    formView.classList.add('hidden');
    savedView.classList.remove('hidden');

    homeBtn.classList.remove('hidden');
    saveBtn.classList.add('hidden');
    randomCoverBtn.classList.add('hidden');

    displaySavedCovers(savedCovers);
  }
};

function displayCurrentCover() {
  mainCoverImage.src = currentCover.cover;
  mainCoverTitle.innerHTML = currentCover.title;
  mainCoverTag1.innerHTML = currentCover.tagline1;
  mainCoverTag2.innerHTML = currentCover.tagline2;
};

function newRandomCover() {
  return new Cover(
  covers[getRandomIndex(covers)], 
  titles[getRandomIndex(titles)], 
  descriptors[getRandomIndex(descriptors)],
  descriptors[getRandomIndex(descriptors)]
  ); 
}

function saveMainCover() {
  savedCovers.push(currentCover);
};

function displaySavedCovers() {
  savedCoversSection.innerHTML = null;
  for (let i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
      `<section class="mini-cover">
        <img class="cover-image" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      </section>`
  }
};

function userCreatedBook() {
  cover.push(userCover.value)
  title.push(userTitle.value);
  descriptors.push(userDesc1.value);
  descriptors.push(userDesc2.value);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
