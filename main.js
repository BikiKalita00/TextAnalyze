function add(e) {







  let input = document.getElementById('text')
  //console.log(input.value)

  lengthspace = input.value.length
  value = input.value
  var lengthspacee = document.createElement("p"); // Create a <button> element
  lengthspacee.classList.add('lengthsspace')
  lengthspacee.innerHTML = "Number of characters (with spaces): " + lengthspace; // Insert text
  document.body.appendChild(lengthspacee);



  var withoutSpace = value.replace(/ /g, "");
  var lenggth = withoutSpace.length;
  var lenpacee = document.createElement("p"); // Create a <button> element
  lenpacee.classList.add('lengthsspace')
  lenpacee.innerHTML = "Number of characters (without spaces): " + lenggth; // Insert text
  document.body.appendChild(lenpacee);


  // Get the input text value

  var text = value;


  // Initialize the word counter

  var numWords = 0;


  // Loop through the text

  // and count spaces in it

  for (var i = 0; i < text.length; i++) {

    var currentCharacter = text[i];


    // Check if the character is a space

    if (currentCharacter == " ") {

      numWords += 1;

    }

  }


  // Add 1 to make the count equal to

  // the number of words

  // (count of words = count of spaces + 1)

  numWords += 1;


  // Display it as output


  var wordsk = document.createElement("p"); // Create a <button> element
  wordsk.classList.add('lengthsspace')
  wordsk.innerHTML = "Number of words : " + numWords; // Insert text
  document.body.appendChild(wordsk);

  let texjt = value;
  const count = texjt.split(". ").length;
  var ee = document.createElement("p"); // Create a <button> element
  ee.classList.add('lengthsspace')
  ee.innerHTML = "Number of Sentences : " + count; // Insert text
  document.body.appendChild(ee);



}
