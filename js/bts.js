function generateText() {
    // Array of possible texts
    var texts = [
    
  "BTS are made up of seven members!",
  "  BTS stands for Bangtan Sonyeondan ",
  "RMs name stands for Rap Monster",
  "BTS are the first K-pop act to receive a Grammy nomination",
  "Their fandom is called Army",

  
    ];
    // Select a random text from the array
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    // Display the random text
    document.getElementById("text").innerHTML = randomText;
  }

  