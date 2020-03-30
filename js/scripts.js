$(document).ready(function() {
  $("#sentence-form").submit(function() {
    var sentence = $("#sentence").val();
    console.log(sentence);

    var words = sentence.split(" ");
    console.log(words);

    // wordLengths = words.forEach(function(word) {
    //   return word.length;
    // })
    // console.log(wordLengths);

    var longWords = words.map(function(word) {
      if (word.length > 3) {
        return word;
      } 
    });
    console.log(longWords);

    var filteredLongWords = longWords.filter(function(word) {
      return word != null;
    });
    console.log(filteredLongWords);

    var reversedLongWords = filteredLongWords.reverse();
    console.log(reversedLongWords);

    var newSentence = reversedLongWords.join(" ");
    console.log(newSentence);



    event.preventDefault();
  });
});