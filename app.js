// Implement landing page (later with audion on page)
//  ^^^^ This was done in the index.html
// Start button function implementation 
// Navigation to game page (second html page) implementation

// vv Below will be created in the second app.js
// Creation of grid
// Creation of game
// Creation of win and lose

/*----- constants -----*/


/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const secondPageContent = document.getElementById("secondPageContent");

  startButton.addEventListener("click", function () {
    window.location.href = "second_page.html";
  });
});



/*----- functions -----*/
