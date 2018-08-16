var firstNames = [];
var lastNames = [];
var x = prompt("Enter first name");
  firstNames.unshift(x);
  
var y = prompt("Enter last name");
  lastNames.unshift(y);
  
  window.alert(firstNames + " " + lastNames);
  window.alert(x.length + y.length);

