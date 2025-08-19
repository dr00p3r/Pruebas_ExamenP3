const sum = require('./sum');

test('Suma de 2 + 5 debe dar 7', () => {
    expect(sum(2, 5)).toBe(7);
});

test('Suma de 10 + 5 debe dar 15', () => {
    expect(sum(10, 5)).toBe(15);
});
