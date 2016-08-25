'use strict'

var questionOne = prompt('Have I ever had long hair?');
  if (questionOne.toLowerCase () === 'yes' || questionOne.toLowerCase () === 'y') {
    alert("Yeah, you're right I was once a hippy.");
  }
  else{
    alert("No, I'm sorry to say that I once was a hippy. :(");
  }
console.log("1st ? " +questionOne);
var questionTwo = prompt('Would I rather watch movies over listening to music?');
  if (questionTwo.toUpperCase () === 'YES' || questionTwo.toUpperCase () === 'Y') {
    alert("Basically, but it does depend on my mood!");
  }
  else{
    alert("Not really, but sometimes I will pick the music instead.");
  }
console.log("2nd ? " +questionTwo);
var questionThree = prompt("Was I still in Oklahoma in 1980?");
  if (questionThree.toLowerCase () === 'no' || questionThree.toLowerCase () === 'n') {
    alert("Trick question!!! I was not born until '83");
  }
  else{
    alert("Trick question!!! I was not born until '83");
  }
console.log("3rd ? " +questionThree);
var questionFour = prompt("Do I have a favorite movie?");
  if (questionFour.toUpperCase () === 'NO' || questionFour.toUpperCase () === 'N') {
    alert("Yep, I actually have 5 if not more, depends on the genre");
  }
  else{
    alert("No, I have a lot more than that actually!");
  }
console.log("4th ? " +questionFour);
var questionFive = prompt("Would I get a Mac over a PC?");
  if (questionFive.toLowerCase () === 'yes' || questionFive.toLowerCase () === 'y') {
    alert("Heck no, ARE YOU CRAZY! I'm a PC");
  }
  else{
    alert("OH YEAH! I am totally a PC");
  }
console.log("5th ? " +questionFive);
