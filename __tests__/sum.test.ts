import sum from "../src/sum"

describe("sum", () => {
    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1, 2);
        expect(result).toEqual(3);
    })
})