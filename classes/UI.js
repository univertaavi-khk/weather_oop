class UI {
	constructor(){
		this.description = document.querySelector("#description")	
		this.temp = document.querySelector("#temp")
		this.location = document.querySelector("#location")
		this.uv_index = document.querySelector("#uv_index")
		this.wind_speed = document.querySelector("#wind_speed")
		this.wind_direction = document.querySelector("#wind_direction")
		this.pressure = document.querySelector("#pressure")
		this.humidity = document.querySelector("#humidity")
	}
	drawWeather(data){
		let celsius = Math.round(parseFloat(data.main.temp)-273.15);
		let description = data.weather[0].description;
		let uv_index = 0
		let wind_speed = data.wind.speed;
		let wind_direction = data.wind.deg;
		let pressure = data.main.pressure;
		let humidity = data.main.humidity;

		this.description.innerHTML = description;
		this.temp.innerHTML = celsius + "&deg";
		this.location.innerHTML = data.name;
		this.uv_index.innerHTML = uv_index + " UV";
		this.wind_speed.innerHTML = wind_speed + " m/s";
		this.wind_direction.innerHTML = wind_direction + "&deg";
		this.pressure.innerHTML = pressure + "P";
		this.humidity.innerHTML = humidity + "%";
	}
}