//References for this html/js come from GWARL201901FSF3-FT 23-RPS-Coded Solved rps-7.html. This source is from the GW Coding Bootcamp, as well as terminal references from w3school.com, and Meri Engel, "merihelp.net:JavaScript part two of the word guessing game.mp4", https://www.youtube.com/watch?v=6hEjUIRuGSU&t=9s; Retrieved March 15, 2019. 
  
  alert("Welcome, you must match the number displayed at the top of the page. Each crystal has a unique value. Select multiple crystals to reach the number to win.");

//Variables
  var randomNumber = Math.floor(Math.random()* 101) + 19;
  var wins = 0;
  var losses = 0;
  var counter = 0;
  var yourScore = [""];

  function randomNumber(seed, selectNumber) {
    console.log(randomNumber);
    return Math.floor(Math.random()*seed) + selectNumber; 
    }

  $("#number-to-guess").text(randomNumber);

  var crystalNumberOptions = [7, 10, 3, 5];

  
  for (var i = 0; i < crystalNumberOptions.length; i++) {

    var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        if (i === 0) {
            imageCrystal.attr("src", "assets/images/Gemstone-Free-PNG-Image.png");
          } 
          else if (i === 1) {
            imageCrystal.attr("src", "assets/images/Gemstone-High-Quality-PNG.png");
        } 
          else if (i === 2) {
            imageCrystal.attr("src", "assets/images/Gemstone-PNG-Images.png");
        } 
          else if (i === 3) {
            imageCrystal.attr("src", "assets/images/Gemstone-Transparent.png");
        }

        imageCrystal.attr("data-crystalvalue", crystalNumberOptions[i]);

        $("#crystals").append(imageCrystal);

        }

////////////////NEW SECTION///////////////


      $(".crystal-image").on("click", function() {
      
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
          counter += crystalValue;
          
          alert("New score: " + counter);

      $("#yourScore").text(counter);
      if (counter == randomNumber){
      	alert("You Won!");
        wins++;
        $("#wins").html(wins);
        counter = 0;
        $("#yourScore").text(counter);
        randomNumber = 0;
        $("#number-to-guess").text(randomNumber);
        
      
      }else if (counter > randomNumber){
      	alert("You Suck!");
        losses++;
        $("#losses").html(losses);
        counter = 0;
        $("#yourScore").text(counter);
        randomNumber = 0;
        $("#number-to-guess").text(randomNumber);
      
      }
    });


////////////////NEW SECTION///////////////
if(yourScore == randomNumber) {
    wins++;
    randomNumber = 0;
    
  }
  if(yourScore.indexOf(counter) >= 0) {

  } else {
      yourScore.push(counter);

        document.getElementById("randomNumber").innerHTML = "number-to-guess" + randomNumber;
          console.log(randomNumber);

        document.getElementById("wins").innerHTML = + wins;
          console.log(wins);
        
        document.getElementById("losses").innerHTML = + losses;
          console.log(losses);
        
        document.getElementById("yourScore").innerHTML = "wins" + yourScore;
          console.log(yourScore);
    }