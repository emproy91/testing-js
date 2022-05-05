const {
  sum, multiply, divide, cylinderVol,
} = require('./02-math');

// eslint-disable-next-line max-len
// Agrupar los casos nos deja una mejor organización en el documento del test y en la salida de terminal.

describe('Test for math', () => {
  describe('test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      // escenario de bruebas.
      const rta = sum(1, 3); // resolver la prueba.
      expect(rta).toBe(4); // resolver la hipotesis.
    });
  });

  describe('test for multiply', () => {
    test('should be 4', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  });

  describe('test for divide', () => {
    test('should divide', () => {
      const rta = divide(6, 3);
      expect(rta).toBe(2);

      const rta2 = divide(7, 2);
      expect(rta2).toBe(3.5);
    });

    test('should divide for zero', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();

      const rta2 = divide(7, 0);
      expect(rta2).toBeNull();
    });
  });
  describe('test for volume', () => {
    test('should be 38', () => {
      const rta = cylinderVol(2, 3);
      expect(rta).toBe(38);
    });
  });
});

/* OUT

 ~/.../testing-js/demos   master ●  npm run test

> demos@1.0.0 test
> jest

 PASS  src/01-sum.test.js
 PASS  src/02-math.test.js  // Pasé o encontré 2 archivos con la extensión ".test.js".

Test Suites: 2 passed, 2 total  // Allí encontré 2 pruebas.
Tests:       2 passed, 2 total  // Todas pasaron.
Snapshots:   0 total
Time:        0.504 s, estimated 1 s
Ran all test suites.

 ~/.../testing-js/demos   master ●  npm run test

> demos@1.0.0 test
> jest

 FAIL  src/02-math.test.js
  ● should divide for zero

  expect(received).toBeNull()  // Cuando en tu metodo lo pones a dividir entre 0 o devuelve un Nulo.

    Received: Infinity   // Devuelve algo que tiende a infinito.

      23 |
      24 |   const rta = divide(6,0);
    > 25 |   expect(rta).toBeNull();
         |               ^
      26 |
      27 |   const rta2 = divide(7,0);
      28 |   expect(rta2).toBeNull();

      at Object.toBeNull (src/02-math.test.js:25:15)

 PASS  src/01-sum.test.js

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 4 passed, 5 total  // Falló una prueba, en este caso hay que hacer refactor.
Snapshots:   0 total
Time:        0.492 s, estimated 1 s
Ran all test suites.

 OUT */
