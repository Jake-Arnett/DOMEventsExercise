// DOM EVENTS EXERCISE


// 1a. Select the 1st button element and set it to a const variable called button1
const button1 = document.querySelector('#one');

// 1b. Using the ONCLICK event property, have an alert that says "You clicked the first button! Congrats!" pop up when you click on the button
button1.onclick = function (){
  alert("You clicked the first button! Congrats!");
}


// 2a. Select the h3 and set it to a const variable called h3
const h3 = document.querySelector('h3');

// 2b. Using addEventListener, have an alert that says "You hovered over the h3 element! Congrats!" pop up when you hover over the h3
h3.addEventListener('mouseover', () => {
  alert("You hovered over the h3 element! Congrats!");
});


// 3a. Select the form element/tag and set it to a const variable called form
const form = document.querySelector('form');

// 3b. Using addEventListener, display the value in the text input with an alert when the submit input in the form is clicked.
form.addEventListener('submit', function (v){
  v.preventDefault();
  const input = form.elements.entry.value;
  alert(input);
  form.elements.entry.value = '';
});




