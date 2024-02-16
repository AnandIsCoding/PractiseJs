function calculateTax() {
    const taxRates = [
        { minIncome: 0, maxIncome: 10000, rate: 0.1 },
        { minIncome: 10001, maxIncome: 50000, rate: 0.2 },
        { minIncome: 50001, maxIncome: 100000, rate: 0.3 },
        { minIncome: 100001, maxIncome: Infinity, rate: 0.4 }
    ];
    return function(income) {
        const taxRate = taxRates.find(rate => income >= rate.minIncome && income <= rate.maxIncome).rate;
        return income * taxRate;
    };
}
const calculateTaxForIncome = calculateTax();

console.log(calculateTaxForIncome(5000));   // Output: 500
console.log(calculateTaxForIncome(20000));  // Output: 4000
console.log(calculateTaxForIncome(70000));  // Output: 21000
console.log(calculateTaxForIncome(120000)); // Output: 48000
