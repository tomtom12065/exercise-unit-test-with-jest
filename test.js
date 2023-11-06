const oneEuroIs = {
    "JPY": 156.5, // Japanese yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

function fromDollarToYen(dollar){
    let euro = dollar / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    return yen;
}

function fromEuroToDollar(euro){
    let dollar = euro * oneEuroIs.USD;
    return dollar;
}

function fromYenToPound(yen){
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;
    return pound;
}

// Assuming you are using Jest to test

// Test conversion from Euro to Dollar
test("One euro should be 1.07 dollars", () => {
    const euros = 3.5;
    const expectedDollars = euros * 1.07;
    const dollars = fromEuroToDollar(euros);
    expect(dollars).toBeCloseTo(expectedDollars);
});

// Test conversion from Dollar to Yen
test("Should convert US Dollars to Japanese Yen correctly", () => {
    const dollars = 2;
    const expectedYen = (dollars / oneEuroIs.USD) * oneEuroIs.JPY;
    const yen = fromDollarToYen(dollars);
    expect(yen).toBeCloseTo(expectedYen);
});

// Test conversion from Yen to Pound
test("Should convert Japanese Yen to British Pounds correctly", () => {
    const yen = 250;
    const expectedPounds = (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
    const pounds = fromYenToPound(yen);
    expect(pounds).toBeCloseTo(expectedPounds);
});
