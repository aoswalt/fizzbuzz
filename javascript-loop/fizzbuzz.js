/* eslint-disable no-magic-numbers */
const [, , count = 100] = process.argv

// simple and straightforward, but crude solution
for(let i = 1; i <= count; ++i) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if(i % 3 === 0) {
    console.log('fizz')
  } else if(i % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(i)
  }
}
