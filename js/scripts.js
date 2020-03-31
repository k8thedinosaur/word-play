$(document).ready(function() {
  $("#sentence-form").submit(function() {
    var sentence = $("#sentence").val();
    console.log(sentence);

    var words = sentence.split(" ");
    console.log(words);

    // var lastWord = words[words.length -1];
    // console.log(lastWord);

    // var noDot = lastWord.split();
    // console.log(noDot);
    // var noDot = noDot.pop();

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

    $("#result").append(newSentence);

    event.preventDefault();
  });
});