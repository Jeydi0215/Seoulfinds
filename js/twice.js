function generateText() {
  // Array of possible texts
  var texts = [
    "Twice was formed in a survival show named Sixteen",
    "Twice is a 9 member girl group",
    "Twice has 3 Japanese members, which is Momo,Sana,and Mina",
    "Park Jihyo is their leader",
    "The tallest among them is the Taiwanese member Tzuyu,despite being the youngest",
    "Their fandom is called Once.",

  ];
  // Select a random text from the array
  var randomIndex = Math.floor(Math.random() * texts.length);
  var randomText = texts[randomIndex];
  // Display the random text
  document.getElementById("text").innerHTML = randomText;
}