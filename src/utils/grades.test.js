const { calcWeightedGrade, percentile } = require('./grades');

test('La nota ponderada de 80 con peso de 0.4 y 90 con peso de 0.6 debe dar 86.00', () => {
    expect(calcWeightedGrade([{score:80,weight:0.4},{score:90,weight:0.6}])).toBe(86.00);
});

test('En la lista [1,2,3] el percentil 0 debe dar 1.00 y el percentil 100 debe dar 3.00', () => {
    const lista = [1,2,3];
    expect(percentile(0, lista)).toBe(1.00);
    expect(percentile(100, lista)).toBe(3.00);
});

test('En la lista [1,2,3,4] el percentil 50 debe dar 2.00', ()=>{
    expect(percentile(50, [1,2,3,4])).toBe(2.00);
});