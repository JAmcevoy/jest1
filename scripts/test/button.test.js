/**
 * @jest-environment jsdom
 */

// Import the function to test
const buttonClick = require("../button.js");

// Reset the document body before each test
beforeEach(() => {
  document.body.innerHTML = '<p id="par"></p>';
});

// Describe the test suite
describe("DOM tests", () => {
  // Test whether the paragraph content changes after button click
  test("expects p content to change", () => {
    // Simulate button click
    buttonClick();
    // Check if the paragraph content has changed
    expect(document.getElementById("par").innerHTML).toBe("You Clicked");
  });
});
