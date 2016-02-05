import test from 'tape';
import validate from '../source/';

/*
 * In addition to these basic tests, this library has also been tested against
 * a database of > 600 ID Numbers which have been verified against the
 * South African Home Affairs ID Number database.
 */

test('validate() returns false for invalid input', (t) => {
  t.plan(6);
  t.notOk(validate(null), '`null` should return false');
  t.notOk(validate(undefined), '`undefined` should return false');
  t.notOk(validate({}), '`{}` should return false');
  t.notOk(validate([]), '`[]` should return false');
  t.notOk(validate(true), '`true` should return false');
  t.notOk(validate(false), '`true` should return false');
  t.end();
});

test('validate() returns true for valid input strings', (t) => {
  t.plan(4);
  t.ok(validate('8001015009087'), 'valid id returned false');
  t.ok(validate('8807185049087'), 'valid id returned false');
  t.ok(validate('8807185050085'), 'valid id returned false');
  t.ok(validate('8907185049085'), 'valid id returned false');
  t.end();
});

test('validate() returns true for valid input numbers', (t) => {
  t.plan(4);
  t.ok(validate(8001015009087), 'valid id returned false');
  t.ok(validate(8807185049087), 'valid id returned false');
  t.ok(validate(8807185050085), 'valid id returned false');
  t.ok(validate(8907185049085), 'valid id returned false');
  t.end();
});

test('validate() returns false for an invalid input string', (t) => {
  t.plan(1);
  t.notOk(validate('8807185050088'), 'invalid id returned true');
  t.end();
});

test('validate() returns false for an invalid input number', (t) => {
  t.plan(1);
  t.notOk(validate(8807185050088), 'invalid id returned true');
  t.end();
});
