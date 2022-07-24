const time = require("./index");

describe("testing time conversion function", () => {
    test("Number 24.75 in time",() => {
        expect(time(24.75)).toBe("24 hours 45 minutes.")
    })
    test("Number 5.55 in time",() => {
        expect(time(5.55)).toBe("5 hours 33 minutes.")
    })
    test("Number 55.7 in time",() => {
        expect(time(55.7)).toBe("55 hours 42 minutes.")
    })
    test("Number 9.60.55 in time",() => {
        expect(time(9.60)).toBe("9 hours 36 minutes.")
    })
    test("Number 8.5 in time",() => {
        expect(time(8.5)).toBe("8 hours 3 minutes.")
    })
    test("Number 44.33 in time",() => {
        expect(time(44.33)).toBe("44 hours 198 minutes.")
    })
})

