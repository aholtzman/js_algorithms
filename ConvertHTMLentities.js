//freecodecamp.org
function convertHTML(str) {
  // &Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
  var arr = str.split('');
  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '&') { arr[i] = '&amp;';}
    if (arr[i] === '<') { arr[i] = '&lt;';}
    if (arr[i] === '>') { arr[i] = '&gt;';}
    if (arr[i] === '"') { arr[i] = '&quot;';}
    if (arr[i] === "'") { arr[i] = '&apos;';}
    else { arr[i] = arr[i]; }
  }

  return arr.join('');

}

convertHTML("Dolce & Gabbana");
