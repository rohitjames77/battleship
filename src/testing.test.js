import React from 'react';
import { render } from '@testing-library/react';
import {carrier} from './ships'


test('carrier object to have gridLength property ', () => {
  expect(carrier).toHaveProperty('gridLength');
});

test('gridLength to be a number', ()=>{
  expect(typeof carrier.gridLength).toBe('number');
})
test('carrier object should have a method called hit', ()=>{
  expect(carrier).toHaveProperty('hit')
})
test('hit function should return number of hits carrier have received if coordinates matches ',()=>{
  expect(carrier.hit('a2','a2')).toEqual(5);
})

test('carrier object should have isSunk function',()=>{
expect(carrier).toHaveProperty('isSunk')
})

test('isSunk function should return sunk status',()=>{
  expect(carrier.isSunk(carrier.hit('a2','a2'),carrier.gridLength)).toEqual(true);
})