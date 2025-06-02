const medium_primes = [13,17,19, 23, 29, 31, 37, 41, 43, 47];
let random1 = Math.floor(Math.random() * (8));
let random2 = Math.floor(Math.random() * (8));
let product = medium_primes[random1] * medium_primes[random2];
document.getElementById("question").innerHTML= "Calculate (p-1)(q-1) for: " + product.toString();
var answer = (medium_primes[random1]-1)*(medium_primes[random2]-1);

let miliseconds = 0;
const timerDisplay = document.getElementById('test'); // Assuming you have an element with id="timer"

function updateTimer() {
  miliseconds++;
  timerDisplay.innerHTML = miliseconds/250;
}

const intervalId = setInterval(updateTimer, 1);
var form = document.getElementById("button");
form.onclick = function(e){
  e.preventDefault();
if(document.getElementById("inputbox").value===answer.toString()){
  if(document.getElementById('test').innerHTML==="Wrong"){
    document.getElementById('test').innerHTML="Wrong";
  }
  else{
    var outcome = "You got it in: ";
  clearInterval(intervalId);
  document.getElementById('test').innerHTML=outcome + timerDisplay.innerHTML + " seconds";}
  }
else{
  clearInterval(intervalId);
  document.getElementById('test').innerHTML="Wrong";}
}
 // Update every second
