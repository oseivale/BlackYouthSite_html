document.addEventListener('DOMContentLoaded', function(){

var blackArtist = document.querySelector('.black-artist');
var ourStory = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
var ourStory2 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
var ourStory3 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
var ourStoryHeader = document.querySelector('.title');
var ourStoryHeader2 = document.querySelector('.title2');
var ourStoryHeader3 = document.querySelector('.title3');
var paragraph1 = document.getElementById('our-story1');
var paragraph2 = document.getElementById('our-story2');
var paragraph3 = document.getElementById('our-story3');
var blackGrad = document.querySelector('.black-grad');
var blackReader = document.querySelector('.black-reader');
var navBar = document.querySelector('.nav-bar');


blackArtist.addEventListener('click', function(e){
	e.preventDefault();
	paragraph1.appendChild(ourStory);
	ourStoryHeader.style.display='none';
	


});

blackGrad.addEventListener('click', function(e){
	e.preventDefault();
	paragraph2.appendChild(ourStory2);
	ourStoryHeader2.style.display='none';
	


});

blackReader.addEventListener('click', function(e){
	e.preventDefault();
	paragraph3.appendChild(ourStory3);
	ourStoryHeader3.style.display='none';
	


});



});

