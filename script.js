const containerElement = document.getElementById("container");
const boxElement = document.getElementById("box");
const paraElement = document.getElementById("desc");
let startTimer = new Date().getTime();

function getRandomBoxColor() {
  // To generate a random hex color
  const excludeColor = "ac1754"; // exclude background color of container
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // checking background color is matched or not
  if (color.slice(1).toLowerCase() === excludeColor) {
    // if matches, changing the last digit of color
    color = color.slice(0, 6) + "5";
  }
  // Return the random color
  return color;
}

// generate random box function
function generateRandomBox() {
  const newWidthHeight = Math.floor(Math.random() * 100) + 50; // 50–150 px width

  // checking height and width for container and skip newWidthHeight
  const containerWidth = containerElement.clientWidth;
  const containerHeight = containerElement.clientHeight;

  const maxLeftPosition = containerWidth - newWidthHeight;
  const maxTopPosition = containerHeight - newWidthHeight;

  // skip top 150px for heading and paragraph
  const topPosition = Math.floor(Math.random() * (maxTopPosition - 150)) + 150;
  const leftPosition = Math.floor(Math.random() * maxLeftPosition);

  //setting the random width and height is same for square box
  boxElement.style.width = `${newWidthHeight}px`;
  boxElement.style.height = `${newWidthHeight}px`;

  ///setting the random positions for left and top
  boxElement.style.top = `${topPosition}px`;
  boxElement.style.left = `${leftPosition}px`;

  //setting the background color for box
  boxElement.style.backgroundColor = getRandomBoxColor();

  // boxElement changes to visible
  boxElement.style.display = "block";
  startTimer = new Date().getTime();
}

boxElement.onclick = function () {
  // after click, boxElement disappers
  boxElement.style.display = "none";
  // changes the text for paragraph
  paraElement.innerHTML = "Catch the box if you can";

  let endTimer = new Date().getTime();
  // calculates the starting time and ending time in sec
  let timeTaken = ((endTimer - startTimer) / 1000).toFixed(2) + " sec";
  alert(timeTaken);

  generateRandomBox();
};
