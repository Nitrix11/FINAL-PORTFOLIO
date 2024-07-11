const textElement = document.getElementById("text");
const sentences = [
  "I am a Frontend developer",
  "I am a UI and UX designer",
  "I am a digital marketer"
];

let index = 0;

function updateText() {
  textElement.style.opacity = 1; 
  textElement.style.transform = "translateY(0)"; 
  textElement.innerText = sentences[index]; 
  index = (index + 1) % sentences.length; 
  setTimeout(() => {
    textElement.style.opacity = 0;
    textElement.style.transform = "translateY(-100%)";
  }, 4000);
  setTimeout(updateText, 5000);
}
textElement.innerText = sentences[index]; 
updateText();