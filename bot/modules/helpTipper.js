'use strict';
let config = require('config');
let airinFee = config.get('airin').paytxfee;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**Airin Tipper**__\nTransaction Fees: **' + airinFee + '**\n    **$tip balance** : get your balance\n    **$tip deposit** : get address for your deposits\n    **$tip withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **$tip <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **$tip private <user> <amount>** : put private before Mentioning a user to tip them privately.\n'
    );
  }
};
