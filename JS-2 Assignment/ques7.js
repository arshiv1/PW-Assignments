const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    calculate: function (operation, a, b) {
        return this[operation](a, b);
    }
};

console.log(calculator.calculate.call(calculator, 'add', 5, 3));

console.log(calculator.calculate.apply(calculator, ['multiply', 4, 6]));

const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function (price) {
        return price - (price * this.discountPercentage) / 100;
    }
};

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

console.log(calculateDiscount(100));