// function changeBackgroundColorBlack(color) {
//   document.body.style.backgroundColor = "black";
// }
// changeBackgroundColorBlack();

// When you call the above function it will change the backgroynd color on refreshing the page

// But here we want to change the backgroynd color when user clicked on the button
function changeBackgroundColorBlack(color) {
  document.body.style.backgroundColor = "black";
}

function changeBackgroundColorwhite(color) {
  document.body.style.backgroundColor = "white";
}

// But The above code will voilate the DRY(Do not repeat yourself) principle
// This will resolve the dry principle
// And this single function will do all functionalities
// But in case if you to do 10 things from a single button to tumhein 10 baar 10 cheezein likhni padegi to overcome this we have EVENT LISTENERS
function changeColor(color) {
  document.body.style.backgroundColor = color;
}

// An "event listener" is like a watcher(characters in marvel what if series) in a computer program that waits for something specific to happen (like a mouse click or a page loading) and then triggers a reaction or action when that event occurs; essentially, it's a piece of code that "listens" for specific events and performs a task when those events happen.
// Event listeners mein aap ek particular  element pe listen kar sakte ho particular element
function darkMode(color) {
  document.body.style.backgroundColor = color;
}
const darkBtn = document.getElementById("dark-mode-button");
// console.log(darkBtn); // This console.log give the element is browser console

// Now you can do a lot of things on this darkbtn like changing the inner text and much more
// darkBtn.innerText = "DarkMode";

// like this we can attach addeventlistener on this dark-mode-button
darkBtn.addEventListener("click", function () {
  console.log("I am getting Clicked");
  darkMode("black");
});
darkBtn.addEventListener("click", function () {
  console.log("Storing the user click");
});

// Now whenever you click the Dark Mode button the above both function will run

// Now create a single button that will do dark mode and light mode (make it Toggleable )
function themeChange(color) {
  document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
  console.log(document.body.style.backgroundColor);
  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor == "white") {
    themeChange("black");
    themeButton.innerText = "Light Mode";
  } else {
    themeChange("white");
    themeButton.innerText = "Dark Mode";
  }
});
