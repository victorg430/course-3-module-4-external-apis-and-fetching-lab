// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
async function fetchWeather(state) {
    const url = `https://api.weather.gov/alerts/active?area=${state}`;
    
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        displayError(error.message);
    }    
}