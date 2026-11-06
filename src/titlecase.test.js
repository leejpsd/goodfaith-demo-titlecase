import assert from 'node:assert/strict';
import { test } from 'node:test';
import { titleCase } from './titlecase.js';

test('capitalises words', () => {
  assert.equal(titleCase('hello world'), 'Hello World');
});

test('leaves capitalised words alone', () => {
  assert.equal(titleCase('Hello World'), 'Hello World');
});
