'use strict';
module.exports = {
  generateRandomId
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateRandomId(userContext, events, done) {
  const id = getRandomInt(1, 1e7                                                                                                                                                                 );
  userContext.vars.id = id;
  return done();
};