"use strict";

var expect = require('chai').expect;

describe('push should add item to end of array', function() {

  it('push should add one to array', function(done) {
    var array = ["blue", 3, "green", 10, "red"];
    var newItem = 55;

    array.myPush(newItem);

    expect(array).to.deep.equal(["blue", 3, "green", 10, "red", 55]);
    expect(array.length).to.equal(6);
    done();
  });

  it('pop should remove last item from array', function(done) {
    var array = ["xyz", 20, "abc"];
    var item;

    item = array.myPop();

    expect(array).to.deep.equal(["xyz", 20]);
    expect(item).to.equal('abc');
    done();
  });

  it('shift should remove 1st item in array of 5 elements', function(done) {
    var array = [1, 2, 3, 4, 5];
    var shiftedItem;

    shiftedItem = array.myShift();

    expect(shiftedItem).to.equal(1);
    expect(array.length).to.equal(4);
    done();
  });

  it('shift should return shifted element for array of 1 element', function(done) {
    var array = [1111];
    var shiftedItem;

    shiftedItem = array.myShift();

    expect(shiftedItem).to.equal(1111);
    expect(array.length).to.equal(0);
    done();
  });

  it('shift should return undefined for empty array', function(done) {
    var array = [];
    var shiftedItem;

    shiftedItem = array.myShift();

    expect(shiftedItem).to.be.undefined;
    expect(array.length).to.equal(0);
    done();
  });

  it('unshift should add item to front of array', function(done) {
    var array = [100, 'mustache', 5000];
    var unshiftedLen;

    unshiftedLen = array.myUnshift('pants');

    expect(array).to.deep.equal(['pants', 100, 'mustache', 5000]);
    expect(array.length).to.equal(4);
    done();
  });

  it('unshift should add item to empty array', function(done) {
    var array = [];
    var unshiftedLen;

    unshiftedLen = array.myUnshift(100999);

    expect(array).to.deep.equal([100999]);
    expect(array.length).to.equal(1);
    expect(unshiftedLen).to.equal(1);
    done();
  });

});
