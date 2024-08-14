// Conversión de monedas
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
};

// Función para convertir de Euro a Dólar
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

// Función para convertir de Dólar a Yen
function fromDollarToYen(dollars) {
    const yenPerDollar = oneEuroIs.JPY / oneEuroIs.USD;
    return dollars * yenPerDollar;
}

// Función para convertir de Yen a Libra Esterlina
function fromYenToPound(yen) {
    const poundsPerYen = oneEuroIs.GBP / oneEuroIs.JPY;
    return yen * poundsPerYen;
}

// Exportamos las funciones para poder usarlas en otros archivos
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };