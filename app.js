'use strict';

var counter = 0;

function rightanswer (){
  counter += 1;
  console.log('counter1: ' + counter);
}
//an array that will be used to ask questions
var questions = ['Have I ever had long hair?',
                 'Would I rather watch movies over listening to music?',
                 'Was I still in Oklahoma in 1980?',
                 'Do I have a favorite movie?',
                 'Would I get a Mac over a PC?'];
//an array that will be used to give responses to positive answers
var goodans = ['Yeah, you\'re right I was once a hippy.',
               'Basically, but it does depend on my mood!',
               'Trick question!!! I was not born until \'83, so technically no',
               'Yep, I actually have 5 if not more, depends on the genre',
               'Heck no, ARE YOU CRAZY! I\'m a PC'];
//an array that will be used to give responses to bad answers
var badans = ['Yeah, I\'m sorry to say that I once was a hippy. :(',
              'Not really, but sometimes I will pick the music instead.',
              'Trick question!!! I was not born until \'83',
              'No, I have a lot more than that actually!',
              'OH YEAH! I am totally a PC'];

//the beginning of collecting answers to put in html
var ans = [];

//for loop to ask questions to the user.
for(var i = 0; i < questions.length; i++){
  //assigning answers to be lower case for answers
  var answer = prompt(questions[i]).toLowerCase();
  if (answer === 'yes' || answer === 'y'){
    rightanswer();
    alert(goodans[i]);
  }
  else{
    alert(badans[i]);
  }
  ans.push(answer);
  console.log('counter3: ' + counter);
}

var randomNum = Math.floor(Math.random() * 20 ) + 1;
console.log('Random number: ' + randomNum);

var questionSix = prompt('How many times have I seen the Movie Hot Fuzz? \n Hint it\'s below 20');

questionSix = Number(questionSix);

for(var k = 0; k < 4; k++) {
  if (questionSix === randomNum) {
    alert('Nice Job! I am super impressed \n Have you ever jumped through the air wilst shooting two guns?');
    k = 4;
    rightanswer();
  }
  else {
    if (questionSix > randomNum) {
      alert('OH NO, that\'s just not right. Go lower');
    }
    else {
      alert('UH OH, close but this time guess a bit higher');
    }

    var attempts = 3 - k;
    attempts = attempts.toString();

    if (k < 2) {
      questionSix = prompt('Oh poop, well you have ' + attempts + ' left.');
    }else if (k === 2) {
      questionSix = prompt('Careful, last chance');
    }else {
      alert('BOWWW WOWWW WOWWWW! WRONG! So Wrong! \nIs it true that there is a spot on a man\'s head that if you shoot it, it will... Blow Up!');
    }
    questionSix = Number(questionSix);
  }
}

console.log('counter:' + counter);

var questionSeven = prompt('I have a few favorite movies. Try guessing one, I\'ll give you 6 tries. \n I\'m not using Hot Fuzz.');

var answers = ['the matrix', 'scent of a woman', 'serenity', 'shawn of the dead', 'avengers', 'nothing to lose'];

for(var l = 0; l < 6; l++) {
  questionSeven = questionSeven.toLowerCase();

  for(var m = 0; m < answers.length; m++){

    if(questionSeven === answers[m]){
      alert('Wow! Nice job! You got it in one go with, ' + questionSeven + '.');
      m = answers.length;
      l = 6;
      rightanswer();
    }
  }
  if (l < 4){
    var guess = 5 - l;
    guess = attempts.toString();

    questionSeven = prompt('Wrong again. You have ' + guess + ' left');
  }else if (l === 4){
    questionSeven = prompt('Careful you only have one more chance! Don\'t worry I believe in you.');
  }else if (l === 5){
    alert('Oh man too many bad guesses. Anyway here they are:');
  }
}

console.log('counter: ' + counter);
//determining the overall score of the user
var score = Math.floor((counter / 7) * 100);
score = score.toString();
if(score >= 60){
  alert('Nice job. I am truly impressed by your knowledge of me. You scored a ' + score + '%!');
}
else {
  alert('Good try, but you only go a ' + score + '%!');
}
//function to render answers to page
function render(){
  var ul = document.createElement('ul');

  for (i = 0; i < ans.length; i++){
    var li = document.createElement('li');
    li.textContent = ans[i];
    ul.appendChild (li);
  }
  var div = document.getElementById('answers');
  div.appendChild (ul);
}

render();
