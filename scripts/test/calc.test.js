/**
 * @jest-environment jsdom
 */

// Import the addition function to test
const addition = require("../calc");

// Describe the test suite
describe("Calculator", () => {
    // Describe the addition function tests
    describe("Addition function", () => {
        // Test addition of 20 and 22
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        // Test addition of 42 and 31
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});