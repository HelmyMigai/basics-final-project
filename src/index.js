function explore() {
  let name = prompt("What's Your Name?");
  if (name.length < 2) {
    alert("That is not a valid name.");
  } else {
    alert(
      "Hello " + name + "," + " " + "pop into something sweet with boba 🤗"
    );
  }
}

let exploreYourPopButton = document.querySelector("button");

exploreYourPopButton.addEventListener("click", explore);
