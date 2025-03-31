const {carrier} = require('./ships');

test('carrier instance shoud have length of 5',()=>{
    expect( carrier.length).toBe(5);
})

