// Types of strings

// single quote ('')
// double quote ("")
// back ticks (``)


// double quote ("")
// const words = "i am a boy"

// // single quote('')
// const word = 'i am a boy'

// // back tick(``)
// const world = `i am a boy`

// console.log(word, words, world)



// const age = 12
// const school = 'DLT'
// const name = 'eef'

// const sentence = `my name is ${name}, i am ${age} years old and i go to ${school} school`
// console.log(sentence)

// const math = "2 + 2"
// const mathematics = `${2 + 2}`

// const lines = `1
// 2
// 3
// 4
// 5`
// console.log(lines)

// const numerals = `Hello i'm Aliyu and i am from "kogi state"`
// console.log(numerals)


// Cheking the length of a string

const name = "Hayzed"

console.log(name.length)

console.log(name[0])


// Changing the case of string

const words = "i am a boy"
console.log(words.toUpperCase())

const word = "SHE IS A GIRL"
console.log(word.toLowerCase())


// Checking for substring

const man = "I love coding and my favourite language is javascript, javascript"

const final = man.indexOf('javascript')
const main = man.lastIndexOf('javascript')

console.log(final)
console.log(main)

const check = man.includes('favourite')

const starting = man.startsWith('I')
const ending = man.endsWith('javascript')
console.log(starting)
console.log(ending)
console.log(check)
