
function test() {
  console.log("Working fine!");
  alert("Working fine!");
}

function ex1() {
  number = prompt('Enter a number!');
  var output = 0;
  for (i = 0; i <= number; i++) {
    output += i;
  };
  console.log(output);
}


function ex2() {
  var output = "";
  var play = true;
  ans1 = prompt('Do you want to play?').toLowerCase();
  if (ans1 === "yes") {
    do {
      word = prompt('Enter a word.');
      output = output + " " + word;
      ans2 = prompt('Do you want to play again?');
      if (ans2 === "no") {
        play = false;
      }
    }
    while (play === true);
    console.log(output);
  }
}


function ex3() {
  var repeat = true;
  name = prompt('What is your name?');
  print = prompt('Would you like to print your name?');
  if (print.toLowerCase() == "yes") {
    output = "Hello. My name is " + name;
    var i = 0;
    while (repeat == true) {
      sentence = output + "!".repeat(i);
      console.log(sentence);
      again = prompt("Would you like to print this again?");
      if (again != "yes") {
        repeat = false;
      }
      i ++;
    }
  }
}

function ex4() {
  day = prompt('What time of day is it?').toLowerCase();
  if (day == "morning") {
    console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
  } else if (day == "noon") {
    console.log('Since it is noon, you should be eating lunch. We suggest a salad');
  } else if (day == 'evening') {
    console.log('Since it is evening, you should be eating dinner. We suggest chicken and rice.');
  } else {
    console.log("Please pick only morning, noon, or evening");
  }
}
