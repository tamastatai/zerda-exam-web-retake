'use strict';

var button = document.querySelector('button');
var admin = document.querySelector('#admin-opt');
var tech = document.querySelector('#tech-opt');
var hoodie = document.querySelector('#hoodie-opt');
var select = document.querySelector('#select');
var ul = document.querySelector('#result');

button.addEventListener('click', function () {
  button.innerText = "Loading";

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/turnomatic');
  xhr.setRequestHeader('Content-Type', 'application/json');

  var feedback = {
    "case": select.value
  };

  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      button.innerText = 'Get another number';
      var li = document.createElement('li');
      li.innerText = 'Your number is ' + xhr.responseText;
      ul.appendChild(li);
    }
  };

xhr.send(JSON.stringify(feedback));
});
