function generateText() {
    // Array of possible texts
    var texts = [
      "The group consists of Karina, Giselle, Winter and NingNing.",
      "They debuted on November 17, 2020 ",
      "The group's name, Aespa, combines the English initials of avatar and experience (Avatar X Experience)",
      "A four-member South Korean girl group under SM Entertainment",
      "Their fandom is called MY.",
  
    ];
    // Select a random text from the array
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    // Display the random text
    document.getElementById("text").innerHTML = randomText;
  }