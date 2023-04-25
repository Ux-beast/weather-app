// Get the weather information for the specified location
function getWeather(location) {
	// Replace 'your-api-key' with your own API key from OpenWeatherMap
	const apiKey = '984e2ff8afa8302ca891955363cbd171';
	// Construct the API URL with the location and API key
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
	// Make a GET request to the API URL and retrieve the JSON data
	fetch(apiUrl)
	  .then(response => response.json())
	  .then(data => {
		// Extract the relevant weather data from the JSON data
		const description = data.weather[0].description;
		const temperature = data.main.temp;
		const cityName = data.name;
		const country = data.sys.country;
  
		// Construct the weather information string
		const weatherInfo = `Current weather in ${cityName}, ${country}: ${description} and ${temperature}°C.`;
  
		// Display the weather information in the HTML
		document.getElementById('weather').textContent = weatherInfo;
	  })
	  .catch(error => {
		// Handle any errors that occur during the request
		console.log(error);
		document.getElementById('weather').textContent = 'Error retrieving weather data.';
	  });
  }
  
  // Get the location from the form and call the getWeather() function
  document.querySelector('form').addEventListener('submit', event => {
	event.preventDefault();
	const location = document.getElementById('location').value;
	getWeather(location);
  });
  