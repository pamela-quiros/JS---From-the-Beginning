class Weather {
    constructor(city, country){
        this.apiKey = '85f8857cdfc7a7eec992b189c6790127';
        this.city = city;
        this.country = country;
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
        //return responseData.current_observation;
    }

    //Change waether location
    changeLocation(city, country){
        this.city = city;
        this.country = country;

    }
}