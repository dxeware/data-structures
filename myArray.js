"use strict";

var removeDuplicates = require('./duplicates');
var findMostFrequent = require('./frequency');

Array.prototype.myPush = function(item) {

  // Add item to end of array ("Push")
  this[this.length] = item;

  return this.length;
};

Array.prototype.myPop = function() {

  // Saved item to be removed ("pop")
  var poppedItem = this[this.length-1];

  // Remove last item ("pop")
  this.length--;

  return poppedItem;
};

Array.prototype.myShift = function() {

  // Save 1st item to be removed
  var shiftedItem = this[0];

  // Remove 1st item by copying all items
  // down one index in array starting with
  // 2nd item
  for (var i = 1; i < this.length; i++) {
    this[i-1] = this[i];
  }

  // Only decrement length, if item removed
  if (shiftedItem) {
    this.length--;
  }

  return shiftedItem;

};

Array.prototype.myUnshift = function(item) {

  // Add item into 1st position of array by
  // copying all items up one index in array
  // starting at end and then inserting new
  // item into 1st position
  for (var i = this.length-1; i >= 0; i--) {
    this[i+1] = this[i];
  }
  this[0] = item;

  // Return new length
  return this.length;

};

Array.prototype.myUnique = function() {

  var uniqueArray = this.slice();

  // Remove duplications in array
  removeDuplicates(uniqueArray);

  return uniqueArray;
};

Array.prototype.myFrequency = function() {

  var char = '';

  // Find most frequent letter in English word array
  // Note: if letter appears more than once in
  // word, it only counts as 1 appearance per word
  char = findMostFrequent(this);

  return char;
};
