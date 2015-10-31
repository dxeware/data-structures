function findMostFrequent(array) {

  var char;

  //Create array of alphabet chars
  var charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // Init object with alphabet chars as keys
  // and frequency set to 0
  var charObj = {};
    for (var i = 0; i<26; i++)
      charObj[charArray[i]] = 0;

  // Convert array to all lowercase words
  for (i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }

  // Walk thru words and increment charObj
  // for frequency of letters found
  // Note: if letter appears more than once in
  // word, it only counts as 1 appearance per word
  for (i = 0; i < array.length; i++) {
    for (var letter in charObj) {
      if (-1 !== array[i].indexOf(letter)) {
        charObj[letter]++;
      }
    }
  }

  //console.log(charObj);

  // Use reduce to find key with highest frequency (i.e, value)
  // If multiple letters, have same frequency then the
  // greatest letter will be returned (i.e, b > a in alphabet)
  char = Object.keys(charObj).reduce(function(a, b) {
          return charObj[a] > charObj[b] ? a : b;
          });

  return char;
}

module.exports = findMostFrequent;
