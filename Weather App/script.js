const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultBox = document.getElementById("weatherResult");

  if (!city) {
    resultBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      const icon = https://openweathermap.org/img/wn/${weather[0].icon}@2x.png;
      resultBox.innerHTML = `
        <h2>${name}</h2>
        <img src="${icon}" alt="${weather[0].description}">
        <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
        <p>🌡 ${main.temp}°C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
      `;
    })
    .catch(error => {
      resultBox.innerHTML = <p>${error.message}</p>;
    });
}