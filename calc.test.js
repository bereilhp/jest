const { sum, sub } = require("./calc.js")

test("Add two numbers", () => {
   expect(sum(1,2)).toBe(3);
})

test("Add two numbers and giving a different result", () => {
    expect(sum(1,2)).not.toBe(4);
 })

test("Subtract two numbers", () => {
    expect(sub(4,2)).toBe(2);
});
