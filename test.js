const assert = require('assert');
const { add, multiply } = require('./index');

console.log("Exécution des tests unitaires...");

assert.strictEqual(add(2, 3), 5, "2 + 3 doit être égal à 5");
assert.strictEqual(multiply(4, 3), 12, "4 * 3 doit être égal à 12");

console.log("✅ Tous les tests ont réussi !");
