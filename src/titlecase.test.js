import assert from 'node:assert/strict';
import { test } from 'node:test';
import { titleCase } from './titlecase.js';

test('capitalises words', () => {
  assert.equal(titleCase('hello world'), 'Hello World');
});
