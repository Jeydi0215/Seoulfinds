function generateText() {
    // Array of possible texts
    var texts = [
      "BTOB stands for Born to Beat",
      "They debuted on March 21, 2012, under CUBE Entertainment. ",
      "Seo Eun Kwang is the leader of Btob",
      "Some of the members are actors/acted in a drama",
      "Their fandom is called Melody.",
  
    ];
    // Select a random text from the array
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    // Display the random text
    document.getElementById("text").innerHTML = randomText;
  }