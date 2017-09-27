function fizzBuzz(num {
  for (var i = 1; i <= num; i++) {
    //check to see if current number is divisible by both 3 & 5
    if (i % 15 === 0) console.log('FizzBuzz')
    //check to see if current number is divisible by 3
    else if (i % 3 === 0) console.log('Fizz')
    //check to see if current number is divisible by 5
    else if (i % 5 === 0) console.log('Buzz')
    else console.log(i)
  }
})
