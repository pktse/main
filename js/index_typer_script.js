
//<script src = "https://ajax.googleapis.com/ajax/ibs/jquery/3.1.0/jquery.min.js"></script>
var words = [ " a junior at UC Berkeley", " San Franciscan", " serial hobbyist", " computer scientist"];
var punctuation = [".", "!"];
var sentence = "welcome to my portfolio. don't worry, you're not at the wrong address. i purposely formmated my portfolio to look like html code! :P feel free to explore around and if you want a more conventional flow, click on the navbar on the left (links are underlined and are hoverable and clickable)."

var j = 0;
var interval;
var elem = document.querySelector("#text2");

// Implements typing effect
function Type() {
  var text =  sentence.substring(0, j + 1);
  elem.innerHTML = text;
  if (punctuation.includes(sentence[j])) {
    setTimeout(() => {  Type(); }, 500);
  } else {
    setTimeout(() => {  Type(); }, 50);
  }
  j++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if(text === sentence) {
      setTimeout(function() { interval = setInterval(Delete, 200); }, 1000);
  }
}

function Delete() {
  var text =  sentence.substring(0, j - 1);
  elem.innerHTML = text;
  j--;

  if(text === ' ') {
      clearInterval(interval);
  }
}
if(!localStorage.getItem("visited")){
  Type()
   localStorage.setItem("visited",true);
}
