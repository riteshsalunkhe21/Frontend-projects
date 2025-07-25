function generateColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, '0');
}

function generatePalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = ""; // Clear existing

  for (let i = 0; i < 5; i++) {
    const color = generateColor();
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;

    const label = document.createElement("div");
    label.className = "color-code";
    label.textContent = color;

    box.appendChild(label);

    // Copy to clipboard on click
    box.onclick = () => {
      navigator.clipboard.writeText(color);
      label.textContent = "✔ Copied!";
      setTimeout(() => (label.textContent = color), 1000);
    };

    palette.appendChild(box);
  }
}
