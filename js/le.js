function generateText() {
    // Array of possible texts
    var texts = [
    
  "Their group name is just a jumbled word for Im Fearless",
  "A five-member girl group ",
  "Their fandom is called FEARNOT",

  
    ];
    // Select a random text from the array
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    // Display the random text
    document.getElementById("text").innerHTML = randomText;
  }

  