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

  it('should return highest letter \'s\' when letter frequency is tie', function() {
    var array = ['shell', 'shawl', 'cat'];
    var char;

    char = array.myFrequency();

    expect(char).to.equal('s');
  });

  it('should ignore anything other than [a-z][A-Z]', function() {
    var array = ['lat@xyz.com', 'ike@ben.en'];
    var char;

    char = array.myFrequency();

    expect(char).to.equal('z');
  });

});
