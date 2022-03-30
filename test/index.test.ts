import { classNames } from '../src';

describe('blah', () => {
  it('Joins two strings', () => {
    expect(classNames('foo', 'bar')).toEqual('foo bar');
  });

  it('Joins string and object with true key', () => {
    expect(classNames('foo', { bar: true })).toEqual('foo bar');
  });

  it('Joins object with string key and true value', () => {
    expect(classNames({ 'foo-bar': true })).toEqual('foo-bar');
  });

  it('Doesnt take object with string key and false value', () => {
    expect(classNames({ 'foo-bar': false })).toEqual('');
  });

  it('Joins two objects keys with true values', () => {
    expect(classNames({ foo: true }, { bar: true })).toEqual('foo bar');
  });

  it('Joins an object with two keys and true values', () => {
    expect(classNames({ foo: true, bar: true })).toEqual('foo bar');
  });

  it('Joins lots of arguments of various types', () => {
    expect(
      classNames('foo', { bar: true, duck: false }, 'baz', { quux: true })
    ).toEqual('foo bar baz quux');
  });

  it('Recursively flattens Arrays', () => {
    let arr = ['b', { c: true, d: false }];
    expect(classNames('a', arr)).toEqual('a b c');
  });

  it('Parses dynamic class names', () => {
    let buttonType = 'primary';
    let obj = { [`btn-${buttonType}`]: true };
    expect(classNames(obj)).toEqual('btn-primary');
  });

  // To be implemented
  it.skip('Removes dupes if one is false', () => {
    expect(classNames('foo', 'foo', 'bar')).toEqual('foo bar');
    expect(classNames('foo', { foo: false, bar: true })).toEqual('bar');
  });

  it('Supports heterogenous arguments', function() {
    expect(classNames({ a: true }, 'b')).toEqual('a b');
  });

  it('Should be trimmed', function() {
    expect(classNames('', 'b', {}, '')).toEqual('b');
  });

  it('Returns an empty string for an empty configuration', function() {
    expect(classNames({})).toEqual('');
  });

  it('Supports an array of class names', function() {
    expect(classNames(['a', 'b'])).toEqual('a b');
  });

  it('Joins array arguments with string arguments', function() {
    expect(classNames(['a', 'b'], 'c')).toEqual('a b c');
    expect(classNames('c', ['a', 'b'])).toEqual('c a b');
  });

  it('Handles multiple array arguments', function() {
    expect(classNames(['a', 'b'], ['c', 'd'])).toEqual('a b c d');
  });

  it('Handles arrays that include falsy and true values', function() {
    expect(classNames(['a', 'b'])).toEqual('a b');
  });

  it('Handles arrays that include arrays', function() {
    expect(classNames(['a', ['b', 'c']])).toEqual('a b c');
  });

  it('Handles arrays that include objects', function() {
    expect(classNames(['a', { b: true, c: false }])).toEqual('a b');
  });

  it('Handles deep array recursion', function() {
    expect(classNames(['a', ['b', ['c', { d: true }]]])).toEqual('a b c d');
  });

  it('Handles arrays that are empty', function() {
    expect(classNames('a', [])).toEqual('a');
  });

  it('Handles nested arrays that have empty nested arrays', function() {
    expect(classNames('a', [[]])).toEqual('a');
  });
});
