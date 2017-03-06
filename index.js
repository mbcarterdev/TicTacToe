#!/usr/bin/env node
const program = require('commander');
//create an object to store board positions
let board = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: ''
};
//build a board
function makeBoard() {
  console.log('\n' +
    ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
    ' ---------------------\n' +
    ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
    ' ---------------------\n' +
    ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n' +);
}

//need to build a markBoard function
//need to track x and o players
//need to identify a winning board
