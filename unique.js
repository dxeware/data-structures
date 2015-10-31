function findDup(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return j;
      }
    }
  }
  return false;
}

function removeDups(array) {

  var index, dups = true;
  do {
    // Use findDup to return index of duplicate
    index = findDup(array);

    //If duplicate found, remove it and continue
    // looking, otherwise stop looking - no more dups
    if (index) {
      array.splice(index, 1);
    } else {
      dups = false;
    }

  } while (dups);

  return array;
}

function unique(array) {

  var uniqueArray = array.slice();

  // Remove duplications in array
  removeDups(uniqueArray);

  return uniqueArray;
}

module.exports = unique;
