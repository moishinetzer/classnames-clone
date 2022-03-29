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
});
