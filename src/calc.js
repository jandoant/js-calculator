"use strict";

var operands = [""];

var displayField = $('#display');

var btn1 = $('#button1');
var btn2 = $('#button2');
var btn3 = $('#button3');
var btn4 = $('#button4');
var btn5 = $('#button5');
var btn6 = $('#button6');
var btn7 = $('#button7');
var btn8 = $('#button8');
var btn9 = $('#button9');
var btn0 = $('#button0');

//Array of all number buttons
var numButtons = [
  btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9
];

//Operations
var btnAdd = $('#addButton');
var btnAdd = $('#subtractButton');
var btnAdd = $('#multiplyButton');
var btnAdd = $('#divideButton');

//Calculation
var btnClear = $('#clearButton');
var btnEquals = $('#equalsButton');

function display() {
  //always show last field of operands array
  $('#display')
    .val(operands[operands.length - 1]);
}

//give each number button a click function
for(var i = 0; i < numButtons.length; i++) {
  $('#button' + i)
    .click(function () {
      operands[operands.length - 1] += $(this)
        .val();
      display();
    });
}

//functionality of clear button
btnClear.click(function () {
  operands = [""];
  display();
});
