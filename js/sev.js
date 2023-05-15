function generateText() {
    // Array of possible texts
    var texts = [
    
  "Seventeen not only promotes itself as a group, but they also perform in three separate units: a hip-hop unit, a vocal unit and a performance dance unit.",
  "A 13 member boy group ",
  "Their fandom is called Carat",

  
    ];
    // Select a random text from the array
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    // Display the random text
    document.getElementById("text").innerHTML = randomText;
  }

  