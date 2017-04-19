'use strict';

module.exports = exports = {};

exports.Mariner = function (name, exp, number){
  this.disappointment = 'eventually';
  this.name = name;
  this.experience = `${exp} season`;
  this.number = number;

};

exports.Batter = function (name, exp, number, bats){
  exports.Mariner.call(this, name, exp, number);
  this.batsWell = bats;
};

exports.haniger = new exports.Batter('Mitch Haniger', 1, 17, true);

exports.Pitcher = function (name, exp, number, isTerrible){
  exports.Mariner.apply(this, [name, exp, number]);
  this.isTerrible = isTerrible;
};

exports.paxton = new exports.Pitcher('James Paxton', 4, 65, false);
