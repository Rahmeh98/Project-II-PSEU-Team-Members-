/* ---------------Hide Placeholder On Input Focus--------------- */



//First Input

var formats_for_first_input =document.getElementById('format_for_first_input');

formats_for_first_input.onfocus = function() {

    'use strict';

    // Store Placeholder Attribute In Backup Attribute

    this.setAttribute('data-placeholder', this.getAttribute('placeholder'));

    // Empty Placeholder Attribute 

    this.setAttribute('placeholder' , '');

};

formats_for_first_input.onblur = function() {

    'use strict';

    // Get Placeholder Attribute From Backup Attribute

    this.setAttribute('placeholder', this.getAttribute('data-placeholder'));

    // Empty Backup Attribute 

    this.setAttribute('data-placeholder' , '');
};



// Second Input

var formats_for_second_input =document.getElementById('format_for_second_input');

formats_for_second_input .onfocus = function() {

    'use strict';

    // Store Placeholder Attribute In Backup Attribute

    this.setAttribute('data-placeholder', this.getAttribute('placeholder'));

    // Empty Placeholder Attribute 

    this.setAttribute('placeholder' , '');

};

formats_for_second_input .onblur = function() {

    'use strict';

    // Get Placeholder Attribute From Backup Attribute

    this.setAttribute('placeholder', this.getAttribute('data-placeholder'));

    // Empty Backup Attribute 

    this.setAttribute('data-placeholder' , '');
};



//Third Input

var formats_for_third_input =document.getElementById('format_for_third_input');

formats_for_third_input .onfocus = function() {

    'use strict';

    // Store Placeholder Attribute In Backup Attribute

    this.setAttribute('data-placeholder', this.getAttribute('placeholder'));

    // Empty Placeholder Attribute 

    this.setAttribute('placeholder' , '');

};

formats_for_third_input .onblur = function() {

    'use strict';

    // Get Placeholder Attribute From Backup Attribute

    this.setAttribute('placeholder', this.getAttribute('data-placeholder'));

    // Empty Backup Attribute 

    this.setAttribute('data-placeholder' , '');
};


//Fourth Input

var formats_for_fourth_input =document.getElementById('format_for_fourth_input');

formats_for_fourth_input .onfocus = function() {

    'use strict';

    // Store Placeholder Attribute In Backup Attribute

    this.setAttribute('data-placeholder', this.getAttribute('placeholder'));

    // Empty Placeholder Attribute 

    this.setAttribute('placeholder' , '');

};

formats_for_fourth_input .onblur = function() {

    'use strict';

    // Get Placeholder Attribute From Backup Attribute

    this.setAttribute('placeholder', this.getAttribute('data-placeholder'));

    // Empty Backup Attribute 

    this.setAttribute('data-placeholder' , '');
};



var modal = document.getElementById("infoModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('format_for_first_input')
const input2 = document.getElementById('format_for_second_input')
const input3 = document.getElementById('major')
const input4 = document.getElementById('role')
const input5 = document.getElementById('format_for_third_input')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''

  itemsArray.push(input2.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input2.value)
  input2.value = ''

  itemsArray.push(input3.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input3.value)
  input3.value = ''

  itemsArray.push(input4.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input4.value)
  input4.value = ''

  itemsArray.push(input5.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input5.value)
  input5.value = ''


})

data.forEach(item => {
  liMaker(item)
})








