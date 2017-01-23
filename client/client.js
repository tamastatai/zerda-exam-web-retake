'use strict';

console.log(lobab);

var button = document.querySelector('button');

button.addEventListener('click', function () {
  button.innerHTML = "Loading";

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/turnomatic');
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  var feedback = {
    'admin': document.querySelector('#admin').value,
    'tech': document.querySelector('#tech').value,
    'hoodie': document.querySelector('#hoodie').value
  }
  xhr.send(JSON.stringify(feedback));
});
