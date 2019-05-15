console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

////////////////////// fetch calls //////////////////////////
fetch(imgUrl)
  .then(response => response.json())
  .then(stuff => addDogImages(stuff.message))

fetch(breedUrl)
  .then(response => response.json())
  // .then(stuff => console.log(stuff))
  // .then(stuff => console.log(Object.keys(stuff.message)))
  .then(stuff => addBreedList(Object.keys(stuff.message)))
  // .then(stuff => )
////////////////////// fetch calls /////////////////////////

//////////////////// helper functions ///////////////////////
function addDogImages(array){
  const dogContainer = document.getElementById('dog-image-container')
  // now we iterate through the array of images and throw them
  // in the dogContainer div
  for (img of array) {
    const dogImage = document.createElement('img')
    dogImage.src = img
    dogContainer.appendChild(dogImage)
  }
}

function addBreedList(object) {
  const breedList = document.getElementById('dog-breeds')
  // const apiList = object
  // now we iterate through the object of dog breeds and throw them
  // in the dog-breeds ul
  for (breed of object) {
    const breedItem = document.createElement('li')
    breedItem.textContent = breed
    breedList.appendChild(breedItem)
  }
}

function changeColor(event) {
  event.target.style.backgroundColor = 'green'
  event.target.style.color = 'white'
}

function filterLetter(letter) {
  const breedList = document.getElementById('dog-breeds')
  const breedItems = breedList.childNodes;
  console.log(breedItems)
  for (let i = 1; i < breedItems.length; i++) {
    let firstLetter = breedItems[i].textContent.charAt(0)
    breedItems[i].style.display = 'block';
    if (firstLetter !== letter) {
      breedItems[i].style.display = 'none';
    }
  }
}
//////////////////// helper functions ///////////////////////

//////////////////// event listeners ////////////////////////
// Challenge 3 event listener
const breedList = document.getElementById('dog-breeds')
breedList.addEventListener('click', changeColor)

// Challenge 4 event listener
const letterSelect = document.getElementById('breed-dropdown')
letterSelect.addEventListener('change', (event) => {
  let filterLetterSelect = event.target.value

  filterLetter(filterLetterSelect);
})
//////////////////// event listeners ////////////////////////
