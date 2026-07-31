const display = document.getElementById("display");
const clickSound = document.getElementById("clickSound");

function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function appendValue(value){
    playSound();
 if(display.textContent === "0"){
 display.textContent = value;
 }else{
 display.textContent += value;
 }
}

function clearDisplay(){
    playSound();
 display.textContent = "0";
}

function deleteLast(){
    playSound();
 if(display.textContent.length === 1){
 display.textContent = "0";
 }else{
 display.textContent =
 display.textContent.slice(0,-1);
 }
}

function calculate(){
    playSound();
 try{
 display.textContent =
 eval(display.textContent);
 }catch{
 display.textContent = "Error";
 }
}

document.addEventListener("keydown", function(event){

 const key = event.key;

 if(!isNaN(key) || "+-*/.%".includes(key)){
 appendValue(key);
 }
 else if(key === "Enter"){
 calculate();
 }
 else if(key === "Backspace"){
 deleteLast();
 }
 else if(key === "Escape"){
 clearDisplay();
 }
});