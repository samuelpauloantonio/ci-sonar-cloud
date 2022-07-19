
const {dv, mult, sb, sum} = require('./sum')


describe('should be able to make calc', () => {
  test('should be able to sum two numbers', () => {
    const result = sum(2,4)
  
    expect(result).toEqual(6)
  })
  
  
  test('should be able to sb two numbers', () => {
    const result = sb(2,4)
  
    expect(result).toEqual(-2)
  })



})