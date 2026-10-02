// Internship Task 1 - Small JavaScript verification.
// Purpose: confirm that script.js is linked and running correctly.

// Print a verification message to the browser console.
console.log("Hello World! JavaScript loaded successfully - Internship Task 1.");

// Show a simple on-page confirmation (beginner-friendly, no extra features).
var statusElement = document.getElementById("js-status");

if (statusElement) {
    statusElement.textContent = "JavaScript loaded successfully.";
}
