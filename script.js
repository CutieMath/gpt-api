import robot from "./assets/robot.png";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat-container");

let loadInterval;

function loader(element) {
  element.textContent = "";
  loadInterval = setInterval(() => {
    element.textContent += ".";
    if (element.textContent === "...") element.textContent = "";
  }, 300);
}

function typeText(element, text) {
  let index = 0;
  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

// Unique ID for each message
function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);
  return `id-${timestamp}-${hexadecimalString}`;
}

// Create column for the user and robot
function chatColumn(isAi, value, uniqueId) {
  return `
            <div class="wrapper ${isAi && "ai"}">
                <div class="chat">
                    <div className="profile">
                        <img
                            src="${isAi ? robot : user}"
                            alt="${isAi ? "robot" : "user"}"
                        />
                    </div>
                    <div class="message" id=${uniqueId}>
                        ${value}
                    </div>
                </div>
            </div>
        `;
}
