"use strict";

var expect = require('chai').expect;

describe('frequency method', function() {

  it('should return \'a\' as most frequent letter', function() {
    var array = ['caT', 'MAP', 'Laura', 'z'];
    var char;

    char = array.myFrequency();

    expect(char).to.equal('a');
  });

  it('should not double count letters in same word', function() {
    var array = ['ladder', 'moused', 'sit', 'set'];
    var char;

    char = array.myFrequency();

    expect(char).to.equal('s');
  });

  it('should return highest letter \'s\' when most frequent letter when letter frequency is tie', function() {
    var array = ['shell', 'shawl', 'cat'];
    var char;

    char = array.myFrequency();

    expect(char).to.equal('s');
  });

  it('should ignore anything other than [a-z][A-Z]', function() {
    var array = ['cat0', 'house1', 'bill1'];
    var char;

    char = array.myFrequency();

    expect(char).to.equal('u');
  });

});
