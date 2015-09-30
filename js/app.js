/*
The user will input two numbers, a start and end value.
When the user clicks "submit" or hits enter (13), the values
trigger a function that adds all the numbers between them
to the page in a list. The numbers divisible by 3 read "Fizz",
5 "Buzz", and 15 "FizzBuzz".

What we will have is a class named FizzBuzz with some methods
inside of it. First is a function that gets the values of the
input fields when the user clicks submit or pushes enter.

The second will take those values and write all the nubmers
inbetween to the DOM except those divisible by 3, 5, 15 each
get Fizz, Buzz, or FizzBuzz, respectively.
*/

// IFFE around the JS Factory Pattern
var FizzBuzz = (function () {

  // Initialize the class
  var _fizzBuzz = function () {

    // Set up a variable to store the input values
    var valArray;

    var appendNode = function (node, text) {
      var createList = document.createElement(node);
      var listText = document.createTextNode(text);
      var listExport = createList.appendChild(listText);
      return listExport;
    };

  };

  _fizzBuzz.prototype = { // define fizzBuzz methods

    // READING METHOD
    // Store the starting and ending values in variables
    getValues: function (startVal, endVal) {
      this.valArray = [startVal, endVal];
      return this.valArray;
    },

    // WRITING METHOD
    writeValues: function () {

      // Remove all child nodes from the ul with ID "fizz-list"
      // This resets the ul with each click
      var fizzieList = document.getElementById("fizz-list");
      while (fizzieList.hasChildNodes()) {
        fizzieList.removeChild(fizzieList.firstChild);
      }

      // Loop through the values and create elements with text
      // nodes and append themto the ul with ID "fizz-list"
      for (var i = this.valArray[0]; i <= this.valArray[1]; i++) {
        if (i % 15 === 0) {
          var createFBList = document.createElement("li");
          var fizzBuzzText = document.createTextNode("FizzBuzz");
          createFBList.appendChild(fizzBuzzText);
          document.getElementById("fizz-list").appendChild(createFBList);
        } else if (i % 3 === 0) {
          var createFizzList = document.createElement("li");
          var fizzText = document.createTextNode("Fizz");
          createFizzList.appendChild(fizzText);
          document.getElementById("fizz-list").appendChild(createFizzList);
        } else if (i % 5 === 0) {
          var createBuzzList = document.createElement("li");
          var buzzText = document.createTextNode("Buzz");
          createBuzzList.appendChild(buzzText);
          document.getElementById("fizz-list").appendChild(createBuzzList);
        } else {
          var createEmptyList = document.createElement("li");
          var emptyText = document.createTextNode(i);
          createEmptyList.appendChild(emptyText);
          document.getElementById("fizz-list").appendChild(createEmptyList);
        }
      }
    }

  }; // END METHODS

  return _fizzBuzz;

}());

var myFizzy = new FizzBuzz();

var button = document.getElementById("submitBuzz");

button.addEventListener("click", function (e) {
  e.preventDefault();

  var startVal = document.getElementById("first-value").value;
  var endVal = document.getElementById("second-value").value;

  myFizzy.getValues(startVal, endVal);
  console.log(myFizzy.valArray);

  // Throw up an alert if there isn't one or both values
  if (myFizzy.valArray[0] === "" || myFizzy.valArray[1] === "") {
    alert("Please enter a number");
  } else {
    myFizzy.writeValues();
  }

});
