function calcWeightedGrade(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('items debe ser un arreglo');
    }
    let grade = 0;
    let sumWeights = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (
            typeof item !== 'object' ||
            typeof item.score !== 'number' ||
            typeof item.weight !== 'number' ||
            item.score < 0 ||
            item.score > 100 ||
            item.weight < 0 ||
            item.weight > 1
        ) {
            throw new TypeError('Tipo inválido');
        }
        grade += item.score * item.weight;
        sumWeights += item.weight;
    }
    if (sumWeights > 1.001 || sumWeights < 0.999) {
        throw new RangeError('La suma de los pesos debe ser 1 ±0.001');
    }
    return Number(grade.toFixed(2));
};

function percentile(p, values) {
    if (typeof p !== 'number' || p < 0 || p > 100) {
        throw new RangeError('Percentil p debe estar en el rango [0,100]');
    }
    if (!Array.isArray(values) || values.length < 1) {
        throw new TypeError('El arreglo debe tener mas de un valor');
    }
    for (const v of values) {
        if (typeof v !== 'number') {
            throw new TypeError('Los valores para calcular el percentil deben ser numeros');
        }
    }
    const sorted = [...values].sort((a, b) => a - b);
    const N = sorted.length;
    if (p === 0) return Number(sorted[0].toFixed(2));
    if (p === 100) return Number(sorted[N - 1].toFixed(2));
    const rank = Math.ceil((p / 100) * N);
    return Number(sorted[rank - 1].toFixed(2));
}

module.exports = {calcWeightedGrade, percentile};
