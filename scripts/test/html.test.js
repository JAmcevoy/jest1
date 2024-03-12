// This setup is typically used in Jest tests when you want to test code that interacts with the DOM or HTML elements. The beforeEach() function ensures that before each test, the document is populated with the content of the "index.html" file, allowing the test cases to interact with it as necessary.

/**
 * @jest-environment jsdom
 */

// Import the function to test
const buttonClick = require("../button.js");

beforeEach(() => {
  // Require the 'fs' module
  let fs = require("fs");
  // Read the contents of the index.html file
  let fileContents = fs.readFileSync("./index.html", "utf8");
  // Write the file contents to the document
  document.write(fileContents);
  // Close the document to ensure proper handling
  document.close();
});
// In this beforeEach() function, the code reads the contents of the "index.html" file using the Node.js fs module. It then writes these contents into the document using document.write(). Finally, document.close() is called to ensure proper handling of the document.

describe("DOM tests", () => {
  test("expects p content to change", () => {
    buttonClick();
    expect(document.getElementById("par").innerHTML).toBe("You Clicked");
  });
});







