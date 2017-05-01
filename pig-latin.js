
//function to loop through arguments
//function
var args = process.argv.slice(2);

//function goes through all arguments and output pig latin
function piglatin(args){
  var output = "";
  for (var i =0; i < args.length; i++){
    output += platin(args[i]) + " ";
  }
  console.log(output);
}

//function when given a word pig latins it
function platin(word){
  var output = "";
  output = word.slice(1)+word[0]+"ay";
  return output;
}

piglatin(args);