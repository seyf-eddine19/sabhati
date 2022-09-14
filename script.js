
/*------------ SHOW MENU ------------*/

const toggleBtn = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
function menu(){
  if (divPalette.classList.contains('show')){     
    theme();
  }  
  navMenu.classList.toggle('show');
  toggleBtn.classList.toggle('bx-menu');
  toggleBtn.classList.toggle('bx-left-arrow-alt');
}
/*------------ SHOW PALETTE ------------*/
const divPalette = document.querySelector("#div-palette");
const paletteBtn = document.querySelector("#palette-button");
function theme(){
  if (navMenu.classList.contains('show')){     
    menu();
  }   
  divPalette.classList.toggle('show');
  paletteBtn.classList.toggle('bx-x');
  paletteBtn.classList.toggle('bx-palette');
}
/*------------ PALETTE COLOR ------------*/
const selectedColor = localStorage.getItem('selected-color');
var colorHex = selectedColor ;
if(colorHex === null){
  localStorage.setItem('selected-color', "#4070F4");
}
document.documentElement.style.setProperty("--first-color", colorHex);

var colorPicker = new iro.ColorPicker('#picker', {
  width: 120,
  color: colorHex
});

colorPicker.on("color:change", function(color){
  colorHex = colorPicker.color.hexString;
  console.log(colorHex); 
  document.documentElement.style.setProperty("--first-color", colorHex);
  localStorage.setItem('selected-color', colorHex);
})
/*------------  ------------*/
function closeAll(){
 if (divPalette.classList.contains('show')){     
    theme();
  } 
  if (navMenu.classList.contains('show')){     
    menu();
  }
}
/*------------ DARK LIGHT THEME ------------*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

if(selectedTheme === 'dark'){
  document.body.classList.toggle('dark-theme');
  themeButton.classList.add('bx-sun');
  themeButton.classList.remove('bx-moon');
}
localStorage.setItem('selected-theme', getCurrentTheme());

themeButton.onclick = function(){
  document.body.classList.toggle('dark-theme');
  themeButton.classList.toggle('bx-sun');
  themeButton.classList.toggle('bx-moon');
  localStorage.setItem('selected-theme', getCurrentTheme());
}
/*------------ COUNTER ------------*/
const scoreLab = document.querySelector("#score-lab");
const titleDiv = document.querySelector("#title-div");
const navItem = document.querySelectorAll(".nav_item");
const navTitle = document.querySelectorAll(".nav_title");
const scoreNav = document.querySelectorAll(".score_lab");
var num = localStorage.getItem('selected-num');
var scoreArray = JSON.parse(localStorage.getItem('score-array'));

if(num === null){
  scoreArray = [0, 0, 0, 0, 0];
  num = 0;
  localStorage.setItem('selected-num', num);
  localStorage.setItem('score-array', JSON.stringify(scoreArray));
  scoreLab.innerHTML = scoreArray[num];
  titleDiv.innerHTML = navTitle[num].textContent;
}

for (var i = 0; i < navItem.length; i++) {
  if(scoreArray[i] === null){
    scoreArray[i] = 0;
    scoreNav[i].innerHTML = 0;
  }else{
    scoreNav[i].innerHTML = scoreArray[i];
  }
} 

localStorage.setItem('selected-num', num); 

navItem.forEach(n => n.addEventListener("click", function act(n){
  var y = this.textContent;
  for (var i = 0; i < navItem.length; i++) {
    var x = navItem[i].textContent;
    if(x === y){
      num = i;
      menu();
      scoreLab.innerHTML = scoreArray[num];
      titleDiv.innerHTML = navTitle[num].textContent;
      localStorage.setItem('selected-num', num);
    }
  }
}));

/*------------ SHOW SCORE ------------*/
const selectedScore = scoreArray[num];

scoreLab.innerHTML = scoreArray[num];
titleDiv.innerHTML = navTitle[num].textContent;

function incre_score(){
  const selectedScore = scoreArray[num];
  var score = selectedScore ;
  score++;
  scoreLab.innerHTML = score;
  scoreArray[num] = score;
  scoreNav[num].innerHTML = score;
  localStorage.setItem('score-array', JSON.stringify(scoreArray)); 
}

function reset_score(){
  score = 0;
  scoreLab.innerHTML = score;
  scoreArray[num] = score;
  scoreNav[num].innerHTML = score;
  localStorage.setItem('score-array', JSON.stringify(scoreArray));
}
/*-----------------------------------*/
