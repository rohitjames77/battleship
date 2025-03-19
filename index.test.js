const carrier = require('../battleship/src/index');

test('Ship object to have hit method',()=>{
    
    expect(typeof carrier.hit).toBe('function');
})

test('Ship object to have isSunk method',()=>{
    
    expect(typeof carrier.isSunk).toBe('function');
})

