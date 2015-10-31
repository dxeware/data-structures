"use strict";

var expect = require('chai').expect;
var fs = require('fs');
var unique = require('./unique');

describe('unique module', function() {

  it('should return array w/o dups if array has 1 duplicate', function(done) {
    var array = [1, "two", 1];
    var newArr = [];

    newArr = unique(array);

    expect(newArr).to.deep.equal([1, "two"]);
    expect(newArr.length).to.equal(2);
    done();
  });

  it('should return array w/o dups if array has 2 duplicates', function(done) {
    var array = [1, "two", "two", 1];
    var newArr = [];

    newArr = unique(array);

    expect(newArr).to.deep.equal([1, "two"]);
    expect(newArr.length).to.equal(2);
    done();
  });

  it('should return orig array if there are no duplicates', function(done) {
    var array = [1, "two", "three", 1001];
    var newArr = [];

    newArr = unique(array);

    expect(newArr).to.deep.equal([1, "two", "three", 1001]);
    expect(newArr.length).to.equal(4);
    done();
  });

  it('should return array with 1 element if all items are duplicates', function(done) {
    var array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    var newArr = [];

    newArr = unique(array);

    expect(newArr).to.deep.equal([1]);
    expect(newArr.length).to.equal(1);
    done();
  });

  it('should return empty array if originally empty', function(done) {
    var array = [];
    var newArr = [];

    newArr = unique(array);

    expect(newArr).to.deep.equal([]);
    expect(newArr.length).to.equal(0);
    done();
  });

});
