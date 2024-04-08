const link = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api = '594d2281e17dd21e5da12181bab7a6da';

async function fetch_weather() {
    const city = document.getElementById("text-input").value.toLowerCase();
    const result = await fetch(link + city + '&appid=' + api);
    const data = await result.json();
    console.log(data.name + ' ' + data.sys.country);

    document.querySelector('.city').innerHTML = data.name;

    const temp = (data.main.temp - 273.15).toFixed(2);
    console.log('Current temperature: ' + temp + '℃');

    document.querySelector('.temperature').innerHTML = temp + '℃';

    const max_temp = (data.main.temp_max - 273.15).toFixed(2);
    const min_temp = (data.main.temp_min - 273.15).toFixed(2);
    console.log('Max/Min temperature: ' + max_temp + '℃ / ' + min_temp + '℃');

    document.querySelector('.max-min').innerHTML = 'Max: ' + max_temp + '℃ | Min: ' + min_temp + '℃';

    console.log('Humidity: ' + data.main.humidity);
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';

    console.log('Pressure: ' + data.main.pressure);
    document.querySelector('.pressure').innerHTML = data.main.pressure + '(hPa)';

    console.log('Weather: ' + data.weather[0].main + ', ' + data.weather[0].description);
    document.querySelector('.sky').innerHTML = data.weather[0].main;

    console.log('Wind: ' + data.wind.speed );
    const wind_speed = (data.wind.speed * 3.6).toFixed(2);
    document.querySelector('.wind').innerHTML = wind_speed + ' km/h';

    const sky = data.weather[0].main.toLowerCase();
    const sky_img = document.getElementById("sky-icon");
    sky_img.src = "images/" + getImage(sky);
}


const getImage = (sky) => {

    switch (sky) {
        case "clear":
            return "day_clear.png";
        case "clouds":
            return "cloud.png";
        case "fog":
            return "fog.png";
        case "rain":
            return "rain.png";
        case "drizzle":
            return "drizzle.png";
        default:
            return "default.png";
    }
}
