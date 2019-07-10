import calculate from './calculate'
import {checkButtonAC} from './calculateHelper'

test('adds 1 + 2 to equal 3', ()=>{
    expect(calculate(obj, buttonName)).toHaveReturned()
})

test('returns object values to null if AC button', ()=>{
    expect(checkButtonAC(buttonName)).toHaveReturnedWith('null')
})

