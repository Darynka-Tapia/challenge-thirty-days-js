function isLeapYear(year) {
    if(year < 0 && !Number.isInteger(year)) return

    const isYearDividedBy4 = year % 4 === 0;
    const isYearDividedBy100 = year % 100 === 0;
    const isYearDividedBy400 = year % 400 === 0;
    return isYearDividedBy4 ? (isYearDividedBy100 && isYearDividedBy400) : false
}

console.log(isLeapYear(2000));

console.log(Number.isInteger(5.10));

/*Año bisiesto*/