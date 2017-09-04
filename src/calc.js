"use strict";

var inputs = [""];
var currentResult = 0;
var calculationHasFinished = false;


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
var btnSubtract = $('#subtractButton');
var btnMultiply = $('#multiplyButton');
var btnDivide = $('#divideButton');

//Calculation
var btnClear = $('#clearButton');
var btnEquals = $('#equalsButton');

function display() {
  //always show last field of inputs array
  $('#display')
    .val(inputs[inputs.length - 1]);
}

//give each number button a click function
for(var i = 0; i < numButtons.length; i++) {
  $('#button' + i)
    .click(function () {

      if(calculationHasFinished) {
        clearEverything();
        calculationHasFinished = false;
      }

      if(!isNaN(inputs[inputs.length - 1])) {
        inputs[inputs.length - 1] += $(this)
          .val();
      }
      else {
        inputs.push($(this)
          .val());
      }

      display();

    });
}

//Add Button
btnAdd.click(function () {

  calculateInputStream();
  displayField.val(currentResult);

  if(!isNaN(inputs[inputs.length - 1])) {
    inputs.push("add");
  }
  else {
    inputs[inputs.length - 1] = "add";
  }

  calculationHasFinished = false;


});

//Subtract Button
btnSubtract.click(function () {

  calculateInputStream();
  displayField.val(currentResult);


  if(!isNaN(inputs[inputs.length - 1])) {
    inputs.push("subtract");
  }
  else {
    inputs[inputs.length - 1] = "subtract";
  }

  calculationHasFinished = false;
});

//Multiply Button
btnMultiply.click(function () {
  calculateInputStream();
  displayField.val(currentResult);

  if(!isNaN(inputs[inputs.length - 1])) {
    inputs.push("multiply");
  }
  else {
    inputs[inputs.length - 1] = "multiply";
  }

  calculationHasFinished = false;
});

//Divide Button
btnDivide.click(function () {

  calculateInputStream();
  displayField.val(currentResult);

  if(!isNaN(inputs[inputs.length - 1])) {
    inputs.push("divide");
  }
  else {
    inputs[inputs.length - 1] = "divide";
  }

  calculationHasFinished = false;
});

//Equals Button
btnEquals.click(function () {
  console.log(inputs);
  calculateInputStream();
  displayField.val(currentResult);
  calculationHasFinished = true;
});

//Clear Button
btnClear.click(function () {
  clearEverything();
});


function clearEverything() {
  inputs = [""];
  currentResult = 0;
  display();
}

function calculateInputStream() {

  if(inputs.length < 3) {
    currentResult = inputs[0];
  }
  else {
    for(var i = 0; i < Math.floor(inputs.length / 2); i++) {
      var firstOperand = inputs[2 * i];
      var operation = inputs[2 * i + 1];
      var secondOperand = inputs[2 * i + 2];

      if(i === 0) {
        currentResult = parseFloat(firstOperand);
      }

      switch(operation) {
      case "add":
        currentResult += parseFloat(secondOperand);
        break;
      case "subtract":
        currentResult -= parseFloat(secondOperand);
        break;
      case "multiply":
        currentResult *= parseFloat(secondOperand);
        break;
      case "divide":
        currentResult /= parseFloat(secondOperand);
        break;
      }
    }
  }
}
