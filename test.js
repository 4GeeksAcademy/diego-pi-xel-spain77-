const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para la función fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
// Uso la función como debe ser usada
 const dollars = fromEuroToDollar(3.5);

// Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
const expected = 3.5 * 1.07;

// Hago mi comparación (la prueba)
expect(dollars).toBe(expected); // 3.745
});

// Prueba para la función fromDollarToYen
test("One dollar should be 146.26", function() {
// Uso la función como debe ser usada
const yen = fromDollarToYen(3.5);

// Usando la regla de tres: (156.5 yenes / 1.07 dólares) * 3.5 dólares
const expected = 3.5 * (156.5 / 1.07);

// Hago mi comparación (la prueba)
 expect(yen).toBe(expected);
});

// Prueba para la función fromYenToPound
test("One yen should be 0,0055", function() {
// Uso la función como debe ser usada
const pounds = fromYenToPound(200);

// Usando la regla de tres: (0.87 libras / 156.5 yenes) * 200 yenes
const expected = 200 * (0.87 / 156.5);

// Hago mi comparación (la prueba)
expect(pounds).toBe(expected);
});
