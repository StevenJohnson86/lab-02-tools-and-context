'use strict';

module.exports = exports = {};

exports.Mariner = function (name, exp, number){
  this.name = name;
  this.experience = `${exp} season`;
  this.number = number;
  this.disappointment = 'eventually';
};

exports.Batter = function (name, exp, number, bats){
  exports.Mariner.call(this, name, exp, number);
  this.batsWell = bats;
};

exports.Pitcher = function (name, exp, number, isTerrible){
  exports.Mariner.apply(this, [name, exp, number]);
  this.isTerrible = isTerrible;
};
