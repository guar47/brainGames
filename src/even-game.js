// @flow

import {
  getRandom,
  playGame,
} from '../';

const message = 'Answer "yes" if number odd otherwise answer "no".';
const getExpression = () => getRandom(1, 100);
const toQuestion = expression => expression.toString();
const checkAnswer = (answer) => {
  if (answer === 'yes' || answer === 'no') {
    return true;
  }
  return false;
};
const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => playGame(message, getExpression, toQuestion, getCorrectAnswer, checkAnswer);
