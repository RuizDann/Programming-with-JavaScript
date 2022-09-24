function concatStrings(strA, strB) {
    return strA + strB;
}

// console.log(concatStrings("abc", "def")); // abcdef
// console.log(concatStrings(1, 2)); // 3 <--- oops! not what I wanted it to do
// console.log(concatStrings("123", "456")); // 123456

// test are a better alternative to comments in my source code because they specify what expectations my source code is trying to satisfy
// tests are callable

// JEST testing
expect(concatStrings("abc", "def")).toBe("abcdef")
// I'm essentially stating that I expect the calling concatStrings with abc and def, will return the value abcdef.

expect(concatStrings(1, 2)).toBe(12) // my expectation of 12 being the results will fail
// it performs the mathematical operation of addition, instead of joining the two numbers together to form the number 12
//failed tests are RED and passed tests are GREEN