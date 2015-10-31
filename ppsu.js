var array = ["blue", 3, "green", 10, "red"];

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

  this.length--;

  // If array is not empty, return the shifted
  // item. If array is empty, return undefined
  if (this.length) {
    return shiftedItem;
  } else {
    return undefined;
  }
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



