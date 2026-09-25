```javascript
// =================================
// 1. PAGE LOAD MESSAGE
// =================================

// Website open hone par Console mein message show hoga
console.log("Welcome to Archana's Portfolio!");



// =================================
// 2. BUTTON CLICK
// =================================

// Saare buttons ko select karna
let buttons = document.querySelectorAll(".btn");

// Har button par click event lagana
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Button clicked!");

    });

});



// =================================
// 3. PROJECT CARDS
// =================================

// Projects section ke saare cards select karna
let projects = document.querySelectorAll("#projects div");

// Har project card par click event lagana
projects.forEach(function(project) {

    project.addEventListener("click", function() {

        alert("You selected a project!");

    });

});



// =================================
// 4. CONTACT SECTION
// =================================

// Contact section ko select karna
let contact = document.querySelector("#contact");

// Contact section par click hone par
contact.addEventListener("click", function() {

    console.log("You are viewing the Contact section.");

});
```
