/*Add your JavaScript here*/
var typeAScore = 0;
var typeBScore = 0;
var numQuestion = 0;



var result = document.getElementById("result");


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var restart = document.getElementById("restart");

function decision(){
  if (typeAScore >=2) {
    result.innerHTML = "Congrats, you seem to have a type A personality!";
    console.log("Congrats, you seem to have a type A personality!");
  }
    else{
      result.innerHTML = "Congrats, you seem to have a type B personality!";
    console.log("Congrats, you seem to have a type B personality!");
    }
  }

function typeA() {
  typeAScore++; 
  numQuestion++;
  console.log("numQuestion = " + numQuestion + " typeAScore = " + typeAScore);
  if (numQuestion == 3) {
    console.log("The quiz has finished.");
    decision();
  }
}
function typeB(){
  typeBScore++;
  numQuestion++;
  console.log("numQuestion = " + numQuestion + " typeBScore = " + typeBScore);
  if (numQuestion == 3) {
    console.log("The quiz has finished.");
    decision();

  }
}

function restartTest(){
  typeAScore = 0;
  typeBScore = 0;
  numQuestion = 0;

  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  result.innerHTML = "Your result is..."
}

q1a1.addEventListener("click", function(){
  if (q1a1.disabled) return;
  q1a1.disabled = true;
  q1a2.disabled = true;
  typeA();
});
q1a2.addEventListener("click", function(){
  if (q1a2.disabled) return;
  q1a1.disabled = true;
  q1a2.disabled = true;
  typeB();
});

q2a1.addEventListener("click",function(){
  if (q2a1.disabled) return;
  q2a1.disabled = true;
  q2a2.disabled = true;
  typeA();
});
q2a2.addEventListener("click", function(){
  if (q2a2.disabled) return;
  q2a1.disabled = true;
  q2a2.disabled = true;
  typeB();
});

q3a1.addEventListener("click", function(){
  if (q3a1.disabled) return;
  q3a1.disabled = true;
  q3a2.disabled = true;
  typeA();
});
q3a2.addEventListener("click", function(){
  if (q3a2.disabled) return;
  q3a1.disabled = true;
  q3a2.disabled = true;
  typeB();
});

restart.addEventListener("click", restartTest);








