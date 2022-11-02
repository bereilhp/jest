const sum = require("./sum")

test("Add two numbers", () => {
   expect(sum(1,2)).toBe(3);
})

test("Add two numbers and giving a different result", () => {
    expect(sum(1,2)).not.toBe(4);
 })
