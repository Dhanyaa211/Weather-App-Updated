// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-searchWeather]");
// const userContainer = document.querySelector(".weather-container");

// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");

// //initially vairables need????

// let oldTab = userTab;
// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// oldTab.classList.add("current-tab");
// getfromSessionStorage();

// function switchTab(newTab) {
//     if(newTab != oldTab) {
//         oldTab.classList.remove("current-tab");
//         oldTab = newTab;
//         oldTab.classList.add("current-tab");

//         if(!searchForm.classList.contains("active")) {
//             //kya search form wala container is invisible, if yes then make it visible
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         }
//         else {
//             //main pehle search wale tab pr tha, ab your weather tab visible karna h 
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
//             //for coordinates, if we haved saved them there.
//             getfromSessionStorage();
//         }
//     }
// }

// userTab.addEventListener("click", () => {
//     //pass clicked tab as input paramter
//     switchTab(userTab);
// });

// searchTab.addEventListener("click", () => {
//     //pass clicked tab as input paramter
//     switchTab(searchTab);
// });

// //check if cordinates are already present in session storage
// function getfromSessionStorage() {
//     const localCoordinates = sessionStorage.getItem("user-coordinates");
//     if(!localCoordinates) {
//         //agar local coordinates nahi mile
//         grantAccessContainer.classList.add("active");
//     }
//     else {
//         const coordinates = JSON.parse(localCoordinates);
//         fetchUserWeatherInfo(coordinates);
//     }

// }

// async function fetchUserWeatherInfo(coordinates) {
//     const {lat, lon} = coordinates;
//     // make grantcontainer invisible
//     grantAccessContainer.classList.remove("active");
//     //make loader visible
//     loadingScreen.classList.add("active");

//     //API CALL
//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//           );
//         const  data = await response.json();

//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err) {
//         loadingScreen.classList.remove("active");
//         //HW

//     }

// }

// function renderWeatherInfo(weatherInfo) {
//     //fistly, we have to fethc the elements 

//     const cityName = document.querySelector("[data-cityName]");
//     const countryIcon = document.querySelector("[data-countryIcon]");
//     const desc = document.querySelector("[data-weatherDesc]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]");
//     const temp = document.querySelector("[data-temp]");
//     const windspeed = document.querySelector("[data-windspeed]");
//     const humidity = document.querySelector("[data-humidity]");
//     const cloudiness = document.querySelector("[data-cloudiness]");

//     console.log(weatherInfo);

//     //fetch values from weatherINfo object and put it UI elements
//     cityName.innerText = weatherInfo?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = weatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText = `${weatherInfo?.main?.temp} °C`;
//     windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
//     humidity.innerText = `${weatherInfo?.main?.humidity}%`;
//     cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


// }

// function getLocation() {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         //HW - show an alert for no gelolocation support available
//     }
// }

// function showPosition(position) {

//     const userCoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//     }

//     sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);

// }

// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener("click", getLocation);

// const searchInput = document.querySelector("[data-searchInput]");

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let cityName = searchInput.value;

//     if(cityName === "")
//         return;
//     else 
//         fetchSearchWeatherInfo(cityName);
// })

// async function fetchSearchWeatherInfo(city) {
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//           );
//         const data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err) {
//         //hW
//     }
// }

// // function checkForDisaster(data-windSpeed, data-humidity, data-cloudiness) {
// //     let disasterAlert = '';
  
// //     // Check for high wind speed
// //     if (data-windSpeed > 19.44) {
// //       disasterAlert += `⚠️ High Wind Speed Alert: ${data-windSpeed} m/s\n`;
// //     }
  
// //     // Check for high humidity
// //     if (data-humidity > 90) {
// //       disasterAlert += `⚠️ High Humidity Alert: ${data-humidity}%\n`;
// //     }
  
// //     // Check for high cloudiness combined with high humidity
// //     if (data-cloudiness > 80 && data-humidity > 70) {
// //       disasterAlert += `⚠️ Storm Alert: High Cloudiness (${data-cloudiness}%) and Humidity (${data-humidity}%)\n`;
// //     }
  
// //     // Trigger alert if any disaster condition is met
// //     if (disasterAlert) {
// //       alert(disasterAlert);
// //     }
// //   }
  
// // function renderWeatherInfo(weatherInfo) {
// //     // Fetch the elements
// //     const cityName = document.querySelector("[data-cityName]");
// //     const countryIcon = document.querySelector("[data-countryIcon]");
// //     const desc = document.querySelector("[data-weatherDesc]");
// //     const weatherIcon = document.querySelector("[data-weatherIcon]");
// //     const temp = document.querySelector("[data-temp]");
// //     const windspeed = document.querySelector("[data-windspeed]");
// //     const humidity = document.querySelector("[data-humidity]");
// //     const cloudiness = document.querySelector("[data-cloudiness]");

// //     console.log(weatherInfo);

// //     // Fetch values from weatherInfo object and display them in UI elements
// //     cityName.innerText = weatherInfo?.name;
// //     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
// //     desc.innerText = weatherInfo?.weather?.[0]?.description;
// //     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
// //     temp.innerText = `${weatherInfo?.main?.temp} °C`;
// //     windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
// //     humidity.innerText = `${weatherInfo?.main?.humidity}%`;
// //     cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

// //     // Call the disaster check function after rendering the weather info
// //     const windSpeed = weatherInfo?.wind?.speed;
// //     const humidityValue = weatherInfo?.main?.humidity;
// //     const cloudinessValue = weatherInfo?.clouds?.all;

// //     checkForDisaster(windSpeed, humidityValue, cloudinessValue);
// // }

// // // Disaster notification based on wind speed, humidity, and cloudiness
// // function checkForDisaster(windSpeed, humidity, cloudiness) {
// //     let disasterAlert = '';

// //     // Check for high wind speed in m/s (threshold: 19.44 m/s)
// //     if (windSpeed > 19.44) {
// //         disasterAlert += `⚠️ High Wind Speed Alert: ${windSpeed} m/s\n`;
// //     }

// //     // Check for high humidity
// //     if (humidity > 90) {
// //         disasterAlert += `⚠️ High Humidity Alert: ${humidity}%\n`;
// //     }

// //     // Check for high cloudiness combined with high humidity
// //     if (cloudiness > 80 && humidity > 70) {
// //         disasterAlert += `⚠️ Storm Alert: High Cloudiness (${cloudiness}%) and Humidity (${humidity}%)\n`;
// //     }

// //     // Trigger alert if any disaster condition is met
// //     if (disasterAlert) {
// //         alert(disasterAlert);
// //     }
// // }
// -------------------------------------------------------------------------------------------------------
// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-searchWeather]");
// const userContainer = document.querySelector(".weather-container");

// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");

// //initially variables needed
// let oldTab = userTab;
// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// oldTab.classList.add("current-tab");
// getfromSessionStorage();

// function switchTab(newTab) {
//     if(newTab != oldTab) {
//         oldTab.classList.remove("current-tab");
//         oldTab = newTab;
//         oldTab.classList.add("current-tab");

//         if(!searchForm.classList.contains("active")) {
//             // Switch to the search form tab
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         }
//         else {
//             // Switch to the user's weather tab
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             getfromSessionStorage();
//         }
//     }
// }

// userTab.addEventListener("click", () => {
//     switchTab(userTab);
// });

// searchTab.addEventListener("click", () => {
//     switchTab(searchTab);
// });

// // Check if coordinates are already present in session storage
// function getfromSessionStorage() {
//     const localCoordinates = sessionStorage.getItem("user-coordinates");
//     if(!localCoordinates) {
//         // If no coordinates, show grant access container
//         grantAccessContainer.classList.add("active");
//     }
//     else {
//         const coordinates = JSON.parse(localCoordinates);
//         fetchUserWeatherInfo(coordinates);
//     }
// }

// async function fetchUserWeatherInfo(coordinates) {
//     const {lat, lon} = coordinates;
//     grantAccessContainer.classList.remove("active");
//     loadingScreen.classList.add("active");

//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//         );
//         const data = await response.json();

//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err) {
//         loadingScreen.classList.remove("active");
//         // Handle error
//     }
// }

// function renderWeatherInfo(weatherInfo) {
//     const cityName = document.querySelector("[data-cityName]");
//     const countryIcon = document.querySelector("[data-countryIcon]");
//     const desc = document.querySelector("[data-weatherDesc]");
//     const weatherIcon = document.querySelector("[data-weatherIcon]");
//     const temp = document.querySelector("[data-temp]");
//     const windspeed = document.querySelector("[data-windspeed]");
//     const humidity = document.querySelector("[data-humidity]");
//     const cloudiness = document.querySelector("[data-cloudiness]");

//     console.log(weatherInfo);

//     cityName.innerText = weatherInfo?.name;
//     countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//     desc.innerText = weatherInfo?.weather?.[0]?.description;
//     weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//     temp.innerText = `${weatherInfo?.main?.temp} °C`;
//     windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
//     humidity.innerText = `${weatherInfo?.main?.humidity}%`;
//     cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

//     // Call the disaster alert notification based on wind speed, humidity, and cloudiness
//     const windSpeed = weatherInfo?.wind?.speed;
//     const humidityValue = weatherInfo?.main?.humidity;
//     const cloudinessValue = weatherInfo?.clouds?.all;

//     checkForDisaster(windSpeed, humidityValue, cloudinessValue);
// }

// // Disaster alert notification function
// function checkForDisaster(windSpeed, humidity, cloudiness) {
//     let disasterAlert = '';

//     // Check for high wind speed in m/s (threshold: 19.44 m/s)
//     if (windSpeed > 19.44) {
//         disasterAlert += `⚠️ High Wind Speed Alert: ${windSpeed} m/s\n`;
//     }

//     // Check for high humidity
//     if (humidity > 90) {
//         disasterAlert += `⚠️ High Humidity Alert: ${humidity}%\n`;
//     }

//     // Check for high cloudiness combined with high humidity
//     if (cloudiness > 80 && humidity > 70) {
//         disasterAlert += `⚠️ Storm Alert: High Cloudiness (${cloudiness}%) and Humidity (${humidity}%)\n`;
//     }

//     // Trigger alert if any disaster condition is met
//     if (disasterAlert) {
//         alert(disasterAlert);
//     }
// }

// function getLocation() {
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         // Handle no geolocation support
//     }
// }

// function showPosition(position) {
//     const userCoordinates = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//     }

//     sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);
// }

// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener("click", getLocation);

// const searchInput = document.querySelector("[data-searchInput]");

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let cityName = searchInput.value;

//     if(cityName === "")
//         return;
//     else 
//         fetchSearchWeatherInfo(cityName);
// })

// async function fetchSearchWeatherInfo(city) {
//     loadingScreen.classList.add("active");
//     userInfoContainer.classList.remove("active");
//     grantAccessContainer.classList.remove("active");

//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//         );
//         const data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//     }
//     catch(err) {
//         // Handle error
//     }
// }
//----------------------------------------------------------------

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// For Chart.js chart rendering
let temperatureChart = null;

let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if (newTab !== oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});

function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
        grantAccessContainer.classList.add("active");
    } else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");

        // Render the basic weather information
        renderWeatherInfo(data);

        // Fetch and render the hourly forecast (for graph)
        fetchHourlyForecast(lat, lon);
    } catch (err) {
        loadingScreen.classList.remove("active");
        // Handle error
    }
}

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");

        renderWeatherInfo(data);

        // Fetch and render the hourly forecast for searched city
        const { lat, lon } = data.coord;
        fetchHourlyForecast(lat, lon);
    } catch (err) {
        loadingScreen.classList.remove("active");
        // Handle error
    }
}

function renderWeatherInfo(weatherInfo) {
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

    const windSpeed = weatherInfo?.wind?.speed;
    const humidityValue = weatherInfo?.main?.humidity;
    const cloudinessValue = weatherInfo?.clouds?.all;

    checkForDisaster(windSpeed, humidityValue, cloudinessValue);
}

// Disaster alert notification function
function checkForDisaster(windSpeed, humidity, cloudiness) {
    let disasterAlert = '';

    if (windSpeed > 19.44) {
        disasterAlert += `⚠️ High Wind Speed Alert: ${windSpeed} m/s\n`;
    }

    if (humidity > 90) {
        disasterAlert += `⚠️ High Humidity Alert: ${humidity}%\n`;
    }

    if (cloudiness > 80 && humidity > 70) {
        disasterAlert += `⚠️ Storm Alert: High Cloudiness (${cloudiness}%) and Humidity (${humidity}%)\n`;
    }

    if (disasterAlert) {
        alert(disasterAlert);
    }
}

// Fetch hourly forecast for the chart
async function fetchHourlyForecast(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        const hourlyData = data.list.slice(0, 12); // Get data for the next 12 hours
        const hours = hourlyData.map(item => {
            const date = new Date(item.dt_txt);
            return date.getHours() + ":00"; // Get hours
        });
        const temperatures = hourlyData.map(item => item.main.temp); // Get temperatures

        renderTemperatureChart(hours, temperatures);
    } catch (err) {
        console.error("Error fetching hourly forecast: ", err);
    }
}

function renderTemperatureChart(hours, temperatures) {
    const ctx = document.getElementById("temperatureChart").getContext("2d");

    // Destroy the previous chart if it exists
    if (temperatureChart) {
        temperatureChart.destroy();
    }

    // Create a new chart
    temperatureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [{
                label: 'Temperature (°C)',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // Handle no geolocation support
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    };

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if (cityName === "") return;
    fetchSearchWeatherInfo(cityName);
});


