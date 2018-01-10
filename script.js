
function test() {
  console.log("Working fine!");
  alert("Working fine!");
}

function ex1() {
  number = window.prompt('Enter a number!');
  var output = 0;
  for (i = 0; i <= number; i++) {
    output += i;
  };
  alert(output);
}


function ex2() {
  var output = "";
  var play = true;
  ans1 = window.prompt('Do you want to play?').toLowerCase();
  if (ans1 === "yes") {
    do {
      word = window.prompt('Enter a word.');
      output = output + " " + word;
      ans2 = window.prompt('Do you want to play again?');
      if (ans2 === "no") {
        play = false;
      }
    }
    while (play === true);
    alert(output);
  }
}


function ex3() {
  var repeat = true;
  name = window.prompt('What is your name?');
  print = window.prompt('Would you like to print your name?');
  if (print.toLowerCase() == "yes") {
    output = "Hello. My name is " + name;
    var i = 0;
    while (repeat == true) {
      sentence = output + "!".repeat(i);
      alert(sentence);
      again = window.prompt("Would you like to print this again?");
      if (again != "yes") {
        repeat = false;
      }
      i ++;
    }
  }
}

function ex4() {
  day = window.prompt('What time of day is it?').toLowerCase();
  if (day == "morning") {
    alert("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
  } else if (day == "noon") {
    alert('Since it is noon, you should be eating lunch. We suggest a salad');
  } else if (day == 'evening') {
    alert('Since it is evening, you should be eating dinner. We suggest chicken and rice.');
  } else {
    alert("Please pick only morning, noon, or evening");
  }
}
