var args = process.argv.slice(2);
//this code is very inefficient
//better way to do this is to make a for loop starting at the length and concatenating
//too late
function reversal(arg){
  var reversed = "";
  var reversedOutput = "";
  for (var i = 0; i < arg.length; i++){
    reversed = [];
    reversedOutput = "";
    for (var j = 0; j < (arg[i].length); j++){
      reversed[arg[i].length-1-j] = arg[i].charAt(j);
    }
    for (x in reversed) {
      reversedOutput += reversed[x];
    }
    console.log(reversedOutput);

  }
}
reversal(args);

//console.log(args);