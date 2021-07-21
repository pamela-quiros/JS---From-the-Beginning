class Storage {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'London';
        this.defaultCountry = 'uk';
    }

    getLocationData() {
        if(localStorage.getItem('city') === null) {
          this.city = this.defaultCity;
        } else {
          this.city = localStorage.getItem('city');
        }
    
        if(localStorage.getItem('country') === null) {
          this.state = this.defaultCountry;
        } else {
          this.state = localStorage.getItem('country');
        }
    
        return {
          city: this.city,
          state: this.state
        }
      }

    setLocationData(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}