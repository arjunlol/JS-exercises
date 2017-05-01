var passcode = process.argv;
//object with specified rules
var rules = {"a":"4", "e":"3", "o":"0", "l":"1"};

function obfuscate (pass){
var coded = "";
  for (var i = 0; i < pass.length; i++){
    var charAtPos = pass.charAt(i);
    var keyCount = 0;
    for (key in rules) {
//      console.log(charAtPos)
      keyCount++;
      if (charAtPos == key){
        coded += rules[key];
        break;
      } else if (keyCount == Object.keys(rules).length) {
        coded += charAtPos;
      }

    }
    // if (charAtPos == "a"){
    //   coded += rules.a;
    // } else if (charAtPos == "e"){
    //   coded += rules.e;
    // } else if (charAtPos == "o"){
    //   coded += rules.o;
    // } else if (charAtPos == "l"){
    //   coded += rules.l;
    // } else {
    //   coded += charAtPos;
    // }
  }
  console.log(coded);
}

//console.log(Object.keys(rules).length)
obfuscate(passcode[2]);
// console.log(rules["a"]);
// for (key in rules) {
//   console.log(rules[key]);
// }