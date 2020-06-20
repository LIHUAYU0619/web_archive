function testExample(a) {
  var greeting = "hi! my name is " + a;
  return greeting;
}

var name = "june";
console.log(testExample(name));

//

var testExample = function(a) {
  var hello = "hi! my name is " + a;
  return hello;
}

var a = "marry"
console.log(testExample(a));

//
(function() {
  var bye = "hi! my name is " + a;
  console.log(bye);
}())
