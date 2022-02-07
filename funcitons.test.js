const  { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

test('returnTwo should equal 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('greeting should say hello with a name', () => {
    expect(greeting('James')).toEqual('Hello, James')
    expect(greeting('Jill')).toEqual('Hello, Jill')
})

describe('Math functions', () => {
    test('add should add numbers', () =>{
     expect(add(1,2)).toEqual(3)
     expect(add(5,9)).toEqual(14)
    })

    test('mutliply should mulitply numbers', () => {
        expect(multiply(5,4)).toEqual(20)
        expect(multiply(6,6)).toEqual(36)
    })

    test('divide should divide the numbers', () => {
     expect(divide(20,5)).toEqual(4)
        expect(divide(36,6)).toEqual(6)
    })

    test('subtract should subtract the numbers', () => {
        expect(subtract(20,20)).toEqual(0)
     expect(subtract(35,5)).toEqual(30)
    })

})



