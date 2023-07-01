let player1_name = localStorage.getItem("player1_name");
let player2_name = localStorage.getItem("player2_name");

let player1_score = 0;
let player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

let question_turn = "player1";
let answer_turn = "player2";
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let actual_answer = parseInt(number1) * parseInt(number2);

  let question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
  let input_box = "<br>Answer:<input type='text' id='input_check_box'>";
  let check_button =
    "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  let row = question_number + input_box + check_button;

  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}


  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  


function check() {
  get_answer = document.getElementById("input_check_box").value;
  actual_answer = parseInt(number1) * parseInt(number2);

  if (get_answer === actual_answer) {
    if (answer_turn === "player1") {
      update_player1_score =player1_score+ 1;
      document.getElementById("player1_score").innerHTML = update_player1_score;
    } else {
      update_player2_score = player2_score+1;
      document.getElementById("player2_score").innerHTML = update_player2_score;
    }
  }

  if (question_turn === "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML =
      "Question Turn - " + player2_name;
      document.getElementById("player_answer").innerHTML =
      "Answer Turn - " + player1_name;
  } 
  else {
    question_turn = "player1";
    document.getElementById("player_question").innerHTML =
      "Question Turn - " + player1_name;
      document.getElementById("player_answer").innerHTML =
      "Answer Turn - " + player2_name;
  }
}
