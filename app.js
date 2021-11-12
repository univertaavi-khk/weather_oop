const ls = new LS();
console.log(ls);

const weatherLocation = ls.getLocationData()

const weather = new Weather(weatherLocation);

const ui = new UI();
console.log(ui);

const form = document.querySelector("#change-city")
form.addEventListener("submit", changeCityWeather)

function changeCityWeather(e){
	const cityName = document.querySelector("#city-name").value
	weather.changeCity(cityName);
	ls.setLocationData(cityName)
	getCityWeather()
	document.querySelector("#city-name").value
	e.preventDefault();
}

function getCityWeather(){
	weather.getWeather()
	.then(data => {
		console.log(data);
		ui.drawWeather(data);
	})
	.catch(error => console.log(error))
}

getCityWeather()