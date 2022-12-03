//   } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     return "You win! Rock beats scissors";
//   } else if (playerSelection === "rock" && computerSelection === "paper") {
//     return "You lose! Paper beats rock";
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     return "You win! Paper beats rock";
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     return "You lose! Scissors beats paper";
//   } else if (playerSelection === "Scissors" && computerSelection === "paper") {
//     return "You win! Scissors beats paper";
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     return "You lose! Rock beats scissors";
//   } else {
//     return "The input is not part of the game";
//   }
// }

// const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
//   let computerSelection = computerPlay();
//   let result = playRound(playerSelection, computerSelection);
//   if (result === "You win! Rock beats scissors") {
//     playerScore++;
//   } else if (result === "You win! Paper beats rock") {
//     playerScore++;
//   } else if (result === "You win! Scissors beats paper") {
//     playerScore++;
//   } else if (result === "You lose! Paper beats rock") {
//     computerScore++;
//   } else if (result === "You lose! Scissors beats paper") {
//     computerScore++;
//   } else if (result === "You lose! Rock beats scissors") {
//     computerScore++;
//   } else if (result === "It's a tie!") {
//     playerScore;
//     computerScore;
//   } else {
//     return "The input is not part of the game";
//   }
//   console.log(result);
//   console.log("Player score: " + playerScore);
//   console.log("Computer score: " + computerScore);
// }

// game();

// for (let i = 0; i < 5; i++) {
//   let player = prompt("Rock, Paper, or Scissors?");
//   let playerSelection = player.toLowerCase();
//   let computerSelection = computerPlay();
//   console.log("Player: " + playerSelection);
//   console.log("Computer: " + computerSelection);
//   console.log(playRound(playerSelection, computerSelection));
// }

// game();

//   } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     return "You win! Rock beats scissors";
//   } else if (playerSelection === "rock" && computerSelection === "paper") {
//     return "You lose! Paper beats rock";
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     return "You win! Paper beats rock";
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     return "You lose! Scissors beats paper";
//   } else if (playerSelection === "Scissors" && computerSelection === "paper") {
//     return "You win! Scissors beats paper";
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     return "You lose! Rock beats scissors";
//   } else {
//     return "The input is not part of the game";
//   }
// }

// const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// game();

// for (let i = 0; i < 5; i++) {
//   let player = prompt("Rock, Paper, or Scissors?");
//   let playerSelection = player.toLowerCase();
//   let computerSelection = computerPlay();
//   console.log("Player: " + playerSelection);
//   console.log("Computer: " + computerSelection);
//   console.log(playRound(playerSelection, computerSelection));
// }

// game();

// function Submit() {
//   alert("Hello, we are now going on a adventure to find a diamond");
//   alert(
//     "On the adventure there will come different choices of different thinks to do, if you choose wrong you might not find the diamond"
//   );
//   alert("Okey, lets go");

//   var Name = prompt("Type in your name");
//   while (Name === "") {
//     alert("Please type a name in the field!");
//     var Name = prompt("Type in your name");
//   }

//   alert("Hello " + Name);

//   var things = prompt(
//     "You are at a table, on the table there is 3 things, a hammer, a flower, and a shovel. Choose 1 item to bring on the adventure"
//   );

//   if (things === "") {
//     alert("You have to choose something to bring on the adventure.");
//     throw new Error("you did not find the diamond!");
//   } else {
//     alert("You choosed " + things);
//   }

//   alert(
//     "You enter a dark forest " +
//       " you can hear birds singing in the air, and the sound of air sweeping through the trees"
//   );

//   alert(
//     "Suddenly, you arrive at a road, with 2 different ways, one to the left and one to the right " +
//       "Choose wich way, you wanna take"
//   );

//   var road = prompt("LEFT or RIGHT?");
//   var decision;
//   var decision2;
//   var decision3;
//   var decision4;
//   var decision5;
//   var decision6;
//   var decision7;

//   function roadLeft() {
//     alert(
//       "As you start walking on the left road, the forest starts to get brighter, and you hear more animals in the background making noises, and the sun shines in."
//     );
//     alert("Far ahead of you, you see a wooden cabin.");
//     alert(
//       "You walk up to the doorstep of the cabin, and glance through the window to see if someone is there."
//     );
//     alert("You knock on the door 2 times " + "*knock* *knock*");
//     alert("Noone opens the door.");
//     alert(
//       "Now you have to choose if you wanna go inside the cabin or continue on the road."
//     );
//     decision = prompt("ROAD or CABIN").toLowerCase();
//   }

//   function roadRight() {
//     alert(
//       "As you start walking on the right road, you stop hearing the sound of birds in the sky"
//     );
//     alert("You walk deeper and deeper in to the forest");
//     alert("You feel the cold wind blowing, it makes you shivver");
//     alert(
//       "You glance with your eyes, to your right, and spots a entrance to a cave"
//     );
//     alert(
//       "You must now choose if you wanna continue on the road, or go inside the cave"
//     );
//     decision2 = prompt("ROAD or CAVE").toLowerCase();
//   }

//   if (road === "left") {
//     roadLeft();
//   } else if (road === "right") {
//     roadRight();
//   } else {
//     throw new Error("you did not find the diamond!");
//   }

//   function continueRoad() {
//     alert("You continue to walk on the road");
//     alert("The trees seems to disapear");
//     alert("And the sun shines stronger than ever");
//     alert(
//       "You hold your hands over your eyes, to avoid getting blend by the sun"
//     );
//     alert("You slowly put your hands down, and as you do it, you look around");
//     alert("Its a huge farm with alot of weath");
//     alert("You see a man, feeding cows");
//     alert("You now have to choose to walk up to the man or move on");
//     decision3 = prompt("MAN or MOVE").toLowerCase();
//   }

//   function cabin() {
//     alert("You decide to go inside the cabin");
//     alert("You extend your left arm and open the door");
//     alert("As you open the old door, its starts screaking *screak* *screak*");
//     alert(
//       "Inside the cabin, its all dusty. And theres a bunch of old furnitures"
//     );
//     alert(
//       "You slowly walks around, in the cabin. the floor cracks as you put your weight on it"
//     );
//     alert("You see a stair down to a basement");
//     alert(
//       "You now have to decide if you wanna go down to the basement or continue searching the house"
//     );
//     decision4 = prompt("BASEMENT or CONTINUE").toLowerCase();
//   }

//   if (decision !== undefined) {
//     // only run this code if the decision variable has been defined
//     if (decision === "road") {
//       continueRoad();
//     } else if (decision === "cabin") {
//       cabin();
//     } else {
//       throw new Error("you did not find the diamond!");
//     }
//   }

//   function road3() {
//     alert("You continue on the dark road");
//     alert(
//       "It feels like the forest gets smaller, the trees are pushing up against you"
//     );
//     alert("You feel afraid");
//     alert("You start running forward");
//     alert("The sticks from the tree hits you as you run past them");
//     alert("You trip on a wooden stick on the ground");
//     alert("And starts falling down a steep hill");
//     alert(" *falling* *falling* ");
//     alert("After a while you stop falling");
//     alert("You stand up, and looks around the area");
//     alert("The trees are yellow");
//     alert("You wonder to yourself, *Where am i?*");
//     alert("Ahead of you, you can see 2 road with different patterns");
//     alert("One of the road as purple with bricks the other one is blue dirt");
//     alert("Choose wich road you wanna take");
//     decision5 = prompt("PURPLE or BLUE").toLowerCase();
//   }

//   function cave() {
//     alert("You walk up to the cave entrance");
//     alert("You hear the sound of bats inside the cave, flying around");
//     alert("You carefully enters the cave");
//     alert("Its cold inside the cave");
//     alert(
//       "As you walk deeper inside the cave, you start to hear the sound of water flushing nearby"
//     );
//     alert("You walk around the corner");
//     alert("You end up at a big open area, with a river in the middle");
//     alert("You spot a boat at the edge of the river");
//     alert(
//       "You walk up to the boat, and as you walk up to it, you see a man walking out from the boat"
//     );
//     alert("you walk up to him");
//     alert("- Hello there! says the Man");
//     prompt(" *Speaking to the man* ");
//     alert("What brings you down here?");
//     prompt(" *speaking to the man* ");
//     alert("Oh i see, well i need to fix this boat, you wanna help?");
//     alert("Do you happen to have a hammer with you?");

//     if (things === "hammer") {
//       alert("you give him your hammer");
//       alert(" - Great! says the man");
//       alert(" - Now we can fix the boat!");
//       alert("The man fixes the boat with the hammer");
//       alert(" *bank* *bank* ");
//       alert(" - How can i thank you? says the man");
//       alert("WAIT! i know, the man walks back to his boat");
//       alert("He comes back with a map in his hands");
//       alert(" - Here take it! its a treasure map");
//       alert("Do you take the map? YES or NO");
//       decision6 = prompt("YES or NO").toLowerCase();
//     } else {
//       alert("You did not bring a hammer" + " you brought a " + things);
//       alert("I only got a " + things);
//       alert(" - oh well, i guess we cant get this thing up and running then");
//       alert(
//         " - theres a exit over the bridge there! *the man points at a bridge* "
//       );
//       alert("You walk over the bridge");
//       alert("the bridge moves a little bit, but you manage to go over it");
//       alert("You walk out from the cave, and enters the forest again");
//       alert("You find the main road again, and you walk home");
//       throw new Error("you did not find the diamond!");
//     }
//   }

//   if (decision2 !== undefined) {
//     // only run this code if the decision2 variable has been defined
//     if (decision2 === "road") {
//       road3();
//     } else if (decision2 === "cave") {
//       cave();
//     } else {
//       throw new Error("you did not find the diamond!");
//     }
//   }

//   function map() {
//     alert("You extend your arm and grabs the map");
//     alert("you examine the map with your eyes");
//     alert("you make your way out to the cave");
//     alert(
//       "you look at the map, and sees that the treasure is far away from you"
//     );
//     alert("you start to walk");
//     alert(" * 3 hours later * ");
//     alert(" you arrive at a large mountain");
//     alert("The map says that the treasure is up on the mountain");
//     alert("You spot a small road up to the mountain");
//     alert("you walk on the road, up to the mountain");
//     alert(" * 1 hour later * you arrive at the top");
//     alert(" you see a rock that shines at the top");
//     alert("you walk up to it");
//     alert("ITS THE DIAMOND!");
//     alert("you grab the diamond");
//     alert("You walk down the mountain");
//     alert("and you run home");
//     document.getElementById("audio").volume = 0.2;
//     document.getElementById("audio").play();
//     alert("CONGRATULATIONS!!!! YOU FOUND THE DIAMOND!");
//     throw new Error("You completed the game by finding the Diamond");
//   }

//   function notMap() {
//     alert(" - DONT TAKE IT THEN!! ");
//     alert(" - GO AWAY! says the man");
//     alert("you walk home, looking sad");
//     throw new Error("you did not find the diamond!");
//   }

//   if (decision6 !== undefined) {
//     if (decision6 === "yes") {
//       map();
//     } else if (decision6 === "no") {
//       notMap();
//     } else {
//       throw new Error("you did not find the diamond!");
//     }
//   }

//   function purple() {
//     alert("You start to walk on the purple road");
//     alert("The trees turns into rainbow colors");
//     alert("and when you walk, you hear wierd noises");
//     alert("you hear a strange sound in the sky");
//     alert("You look up, and spots a bird, circling over you");
//     alert("its flies down to you " + "and lands on a rock next to you");
//     alert(" - Hello! says the bird");
//     prompt("*Speaking to the bird*");
//     alert(" - Welcome to Dandorg, whats your name?");
//     alert(Name);
//     alert("So " + Name + " what brings you here to Dandorg? ");
//     prompt("*Speaking to the bird*");
//     alert(
//       "okey " +
//         "well if you continue this road, you will end up in the middle of nowhere, and    into the shadow"
//     );
//     alert("you decide to listen to the bird, and you walk home");
//     throw new Error("you did not find the diamond!");
//   }

//   function blue() {
//     alert("You start walking on the blue road");
//     alert("You spot a grocery store at the side of the road.");
//     alert("You decide to walk inside, and buy yourself some food.");
//     alert(
//       "You open the door to the store, you hear a loud bell as you opened the door."
//     );
//     alert("You notice the cashier turning her head towards you.");
//     alert("You take a bag, and nods politely, then walks in to the store.");
//     alert("Heres a list of all the things available in the store.");
//     var inStock = [
//       "apples",
//       "eggs",
//       "milk",
//       "cookies",
//       "cheese",
//       "bread",
//       "ham",
//       "carrot",
//       "broccoli",
//       "pizza",
//       "crackers",
//       "onions",
//       "bananas",
//       "frozen dinner",
//       "cereals",
//     ];
//     var search = prompt(
//       inStock.join(", ") +
//         " " +
//         "Choose wich things you wanna buy, type 'done' when you are done." +
//         " type one thing at the time."
//     );
//     var inBag = [];

//     while (search !== "done") {
//       search = prompt(
//         inStock +
//           " " +
//           "Choose wich things you wanna buy, press 'enter' when you are done." +
//           " type one thing at the time."
//       );
//       if (inStock.indexOf(search) > -1) {
//         inBag.push(search);
//         alert("You grabbed some " + search + " and put it in the bag");
//       } else if (!search) {
//         grocery();
//         break;
//       } else {
//         alert("Please choose something from the list!");
//       }
//     }

//     function grocery() {
//       alert("You decided that its enough");
//       alert("In your bag you have " + inBag.join(", ") + ".");
//       alert("You walk up to the cashier, and put all your stuff on the desk");
//       alert("The cashier, scans every product");
//       alert(
//         "You politely pay for your product, then walks out with the stuff in the bag"
//       );
//       alert("You walk back home with the bag.");

//       throw new Error("you did not find the diamond!");
//     }
//   }

//   if (decision5 !== undefined) {
//     if (decision5 === "purple") {
//       purple();
//     } else if (decision5 === "blue") {
//       blue();
//     } else {
//       throw new Error("you did not find the diamond!");
//     }
//   }

//   function man() {
//     alert("you walk up to the man");
//     alert("He turns around and looks at you.");
//     alert(" - GO AWAY! get out from  my property!! ");
//     alert(" - GET OOOOOOOOOOOOOOOOUT!!!!!! ");
//     alert(" you start to run back where you came from");

//     throw new Error("you did not find the diamond!");
//   }

//   function move() {
//     alert("You ignore walking up to the man, and you move on");
//     alert(
//       "The grass is much greener and as you walk, the flowers appear by the road"
//     );
//     alert(
//       "Suddenly as you are walking on the road, you notice a shop at the side of the road"
//     );
//     alert("You walk up to the door at the shop");
//     alert("It has a sign saying CLOSED");
//     alert("You look around, and notice that the road has ended");
//     alert("You also spot a sign hanging on a tree nearby");
//     alert("You walk up to it, and reads the text");
//     alert("its a riddle!");
//     alert("It says...");
//     var riddle = alert(
//       "*Q: Take away my first letter, and I still sound the same. Take away my last letter, I still sound the same. Even take away my letter in the middle, I will still sound the same. I am a five letter word. What am I?*"
//     );
//     var riddleArray = ["Oven", "Carrot", "Empty"];
//     var guess = prompt(
//       "Wich one of these words are the correct answer?" +
//         riddleArray[0] +
//         " " +
//         riddleArray[1] +
//         " " +
//         riddleArray[2] +
//         " You have 2 guesses"
//     ).toLowerCase();

//     if (guess === "oven") {
//       riddleArray.shift();
//       alert("You guessed it wrong!");
//       var guessing = prompt(
//         "Last try, wich of these words are the correct answer?" +
//           riddleArray.join(", ")
//       );
//     } else if (guess === "carrot") {
//       delete riddleArray[1];
//       alert("You guessed it wrong!");
//       var guessing2 = prompt(
//         "last try, wich of these words are the correct answer?" +
//           riddleArray.join(", ")
//       );
//     } else if (guess === "empty") {
//       alert("You guessed the correct answer!");
//       riddleCorrect();
//     } else {
//       alert("You did not guess any of these words!");
//       throw new Error("you did not find the diamond!");
//     }

//     if (guessing === "carrot") {
//       alert("You guessed it wrong again!");
//       alert("You run home feeling sad.");
//       throw new Error("you did not find the diamond!");
//     } else {
//       alert("You guessed the correct answer!");
//       riddleCorrect();
//     }

//     if (guessing2 === "oven") {
//       alert("You guessed it wrong again!");
//       alert("You run home feeling sad.");
//       throw new Error("you did not find the diamond!");
//     } else {
//       alert("You guessed the correct answer!");
//       riddleCorrect();
//     }
//   }

//   if (decision3 !== undefined) {
//     if (decision3 === "man") {
//       man();
//     } else if (decision3 === "move") {
//       move();
//     } else {
//       throw new Error("you did not find the diamond!");
//     }
//   }

//   function riddleCorrect() {
//     alert("You hear someone talking behind you");
//     alert(" - Good job, you solved the riddle!");
//     alert(" - Noone had solved it before");
//     alert(" - Heres a pair of keys for the bike over there");
//     alert("The man throws the keys to you, and you cath them");
//     alert(
//       " - With the bike you can ride over the field instead of finding a road."
//     );
//     alert("The man walks away.");
//     alert(
//       "You walk up to the bike, and puts the key in the ignition and turns the engine on."
//     );
//     alert("You sit down on the bike.");
//     document.getElementById("audio3").volume = 0.1;
//     document.getElementById("audio3").play();
//     alert("And start riding onto the field");
//     alert("ITs bumpy, and you have a hard time, keeping yourself on the bike.");
//     alert("But you manage to do it");
//     alert("20 minutes later.");
//     alert(
//       "The field has ended, and you arrive at a large river, with loud streams."
//     );
//     document.getElementById("audio3").pause();
//     alert("You turn off the engine on the bike");
//     document.getElementById("audio2").volume = 0.5;
//     document.getElementById("audio2").play();
//     alert(
//       "You look around to find something you can use to go over the river."
//     );
//     alert("You see a small boat at the edge of the river");
//     alert("You walk up to it, and grabs the paddles laying on the shore");
//     alert("you sit down in the boat, and adjusts the paddles");
//     alert("You starts to paddle away over to the other side of the river");
//     alert("But the stream in the river, are to strong.");
//     alert("You get carried away by them");
//     alert("You loose your paddles");
//     alert("You cant get out from the boat, because its to dangerous");
//     alert("1 hour has passed");
//     alert("You end up by the local river at hour home town");
//     alert("You look disappointed, and walks home");
//     document.getElementById("audio2").pause();
//     throw new Error("you did not find the diamond!");
//   }

//   function basement() {
//     alert(
//       "You walk down the basement, as you walk down you hear the wooden steps squeeking"
//     );
//     alert("You can hear rats, on the floor running.");
//     alert("You look around in the basement");
//     alert("And you spot a pile of dirt");
//     alert("and something sticks out under it");
//     alert("If you have a shovel you can dig it out");
//   }

//   function continues() {
//     alert("You continue to search the cabin");
//     alert("But you cant find anything");
//     alert("You take a last glance inside the cabin");
//     alert("then decides to go home, and study instead");
//     throw new Error("you did not find the diamond!");
//   }

//   if (decision4 !== undefined) {
//     if (decision4 === "basement") {
//       basement();
//     } else if (decision4 === "continue") {
//       continues();
//     } else {
//       throw new Error("you did not find the diamond!");
//     }
//   }

//   if (things === "shovel") {
//     alert("you dig out the item under the pile");
//     alert("its a football");
//     alert("you take it and run back home, feeling happy");
//     throw new Error("you did not find the diamond!");
//   } else {
//     alert("You brough a " + things + "you cant dig it out");
//     alert("You walk home sad");
//     throw new Error("you did not find the diamond!");
//   }
//
