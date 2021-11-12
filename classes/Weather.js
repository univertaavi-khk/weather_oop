class Weather{
	constructor(city){
		this.city = city;
		this.key = "236975eeed1df511f110dff4d54414c3"
	}

	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responseData = await response.json();
		return responseData;
	}

	changeCity(city){
		this.city = city;
	}
}
