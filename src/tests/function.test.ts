import {sum, addFieldToObject, isEven} from '../utils/testFunctions';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should add field to object', () => {
  const field = 'name';
  const value = 'khan';
  const object = {
    id: 1,
  };
  expect(addFieldToObject(field, value, object)).toEqual({id: 1, name: 'khan'});
});

test('should be even', () => {
  expect(isEven(2)).toBeTruthy();
});

test('should not even', () => {
  expect(isEven(3)).toBeFalsy();
});

test('adding floating point numbers', () => {
  const value = 1.1 + 0.2;
  expect(value).toBeCloseTo(1.3); // This works.
});

test('there should be khan in sentence', () => {
  const value = 'khan is king';
  expect(value).toMatch(/khan/);
});

test('should contain india in countries', () => {
  const countries = ['india', 'nepal', 'china'];
  expect(countries).toContain('india');
});
