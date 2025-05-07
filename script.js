const button = document.getElementById("actionButton");

// Button Event Handling
button.addEventListener("click", function() {
    this.textContent = "Clicked!";
    this.style.backgroundColor = "lightblue";
});

// Hover Effects
button.addEventListener("mouseover", () => button.style.backgroundColor = "lightgreen");
button.addEventListener("mouseout", () => button.style.backgroundColor = "");

// Keypress Detection
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") alert("Enter key pressed!");
});

// Secret Action: Double-click
button.addEventListener("dblclick", () => alert("Double-click detected!"));

// Secret Action: Long Press
let pressTimer;
button.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => alert("Long press activated!"), 1000);
});
button.addEventListener("mouseup", () => clearTimeout(pressTimer));

// Image Slider
let slideIndex = 1;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

document.getElementById("nextSlide").addEventListener("click", function() {
    slideIndex = (slideIndex + 1) % images.length;
    document.getElementById("slideImage").src = images[slideIndex];
});

// Tab Switching
function switchTab(index) {
    document.querySelectorAll(".tabContent").forEach((tab, idx) => {
        tab.style.display = idx === index ? "block" : "none";
        tab.style.opacity = idx === index ? "1" : "0";
    });
}

// Accordion with smooth transitions
document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
    });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function