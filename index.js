function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}
function makeInt(string){return string}
function preserveDecimal(string){return string}
function increment(a){return (increment(a.toString())).toEqual(a)}
function decrement(a){return (decrement(a)).toEqual(a - 1)}
function makeInt(num){return (makeInt('0x2328')).toEqual(0)}
function makeInt(NaN){return (makeInt('NaN')).toEqual(true)}
function preserveDecimal(n) {it ('preserves n\'s decimals (it parses (n) as a floating point number) and returns the parsed number')}
function preserveDecimal(n) {return ((n)('2.222')).toBe(2.222)}
function preserveDecimal(){expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)}