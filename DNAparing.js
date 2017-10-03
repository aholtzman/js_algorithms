function pairElement(str) {
  //creste an empty array to holt pairs
  var result = [];
  //break string into an array or charaters
  var arr = str.split("");

  arr.forEach(function(letter) {
    if (letter === 'A') { result.push([ letter, 'T']); }
    else if (letter === 'T') { result.push([ letter, 'A']); }
    else if (letter === 'C') { result.push([ letter, 'G']); }
    else { result.push([ letter, 'C']); }
  });

  return result;
}
