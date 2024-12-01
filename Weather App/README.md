# Weather App 🌤️

A sleek and modern weather application that provides real-time weather information with a beautiful user interface.

## 🌟 Features

- Real-time weather data
- 5-day forecast
- Location-based weather
- Search by city name
- Temperature in °C and °F
- Weather conditions icons
- Wind speed and direction
- Humidity levels
- Sunrise and sunset times

## 🛠️ Technical Details

### Built With
- HTML5
- CSS3 with modern animations
- Vanilla JavaScript
- Weather API integration
- Geolocation API

### API Integration
- OpenWeatherMap API
- Geolocation services
- Error handling for API requests
- Rate limiting management

## 🚀 Getting Started

1. Clone this directory
2. Get an API key from [OpenWeatherMap](https://openweathermap.org/api)
3. Add your API key to `config.js`
4. Open `index.html` in your browser

## 💻 Usage

```javascript
// Example API call
async function getWeather(city) {
    const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
    return await response.json();
}
```

## 🔑 API Key Setup

1. Sign up at OpenWeatherMap
2. Get your API key
3. Create `config.js` with:
```javascript
const CONFIG = {
    API_KEY: 'your_api_key_here'
};
```

## 🎨 Customization

- Modify themes in CSS
- Add new weather icons
- Customize display units
- Add more weather data points

## ⚠️ Error Handling

- Network error management
- Invalid city handling
- API limit notifications
- Geolocation permission handling

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- OpenWeatherMap for API access
- Weather icons designers
- Modern weather app inspirations
