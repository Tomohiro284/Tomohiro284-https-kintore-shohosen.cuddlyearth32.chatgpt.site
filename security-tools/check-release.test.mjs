import assert from 'node:assert/strict';
import {inspect} from './check-release.mjs';
assert.deepEqual(inspect('const message = "hello";'), []);
assert(inspect('-----BEGIN '+'PRIVATE KEY-----').includes('private-key'));
assert(inspect('gh'+'p_'+'A'.repeat(36)).includes('github-token'));
assert(inspect('<script src="https://example.invalid/x.js"></script>').includes('remote-script'));
assert(inspect('ev'+'al("input")').includes('dangerous-code'));
console.log('5 release-check tests passed');
