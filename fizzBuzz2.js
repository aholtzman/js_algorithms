const fizz = num => num % 3 === 0 ? 'Fizz' : ''
const buzz = num => num % 5 === 0 ? 'Buzz' : ''

const fizzBuzz = (number) => {
  const arr = [...Array(number).keys()]

  return arr.map(n => {
    const num = n + 1
    return fizz(num) || buzz(num) ?`${fizz(num)}${buzz(num)}` : num
  }
  )
}

fizzBuzz(15)
