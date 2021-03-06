// @flow

import {
  getRandom,
  playGame,
} from '../';

const message = 'Find the greatest common divisor of given numbers.';
const getExpression = () => {
  const expression = {};
  expression.firstNumber = getRandom(1, 100);
  expression.secondNumber = getRandom(1, 100);
  return expression;
};
const toQuestion = expression => `${expression.firstNumber} ${expression.secondNumber}`;
const checkAnswer = (answer) => {
  if (Number.isInteger(Number(answer))) {
    return true;
  }
  return false;
};
const getCorrectAnswer = (expression) => {
  let i = 0;
  let result;
  if (expression.firstNumber > expression.secondNumber) {
    i = expression.secondNumber;
  } else {
    i = expression.firstNumber;
  }
  while (i <= expression.firstNumber || i <= expression.secondNumber) {
    if (expression.firstNumber % i === 0 && expression.secondNumber % i === 0) {
      result = i;
      break;
    }
    i -= 1;
  }
  return result;
};

export default () => playGame(message, getExpression, toQuestion, getCorrectAnswer, checkAnswer);
