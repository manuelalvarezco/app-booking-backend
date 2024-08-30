require('dotenv').config();
const UNIVERSAL_API = process.env.UNIVERSAL_API;
const API_TOKEN = process.env.API_TOKEN;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const USER_EMAIL = process.env.USER_EMAIL;

class ReservesService {

  async getAccesstoken() {
    const options = {
      method: 'GET',
      headers: {
        'api-token': API_TOKEN,
        'user-email': USER_EMAIL,
      },
    };
    return await fetch(`${UNIVERSAL_API}/getaccesstoken`, options);

  }

  async findCountries(token) {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    return await fetch(`${UNIVERSAL_API}/countries`, options);
  }

  async findStates(country) {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    return await fetch(`${UNIVERSAL_API}/states/${country}`, options);
  }

  async findCities(city) {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    return await fetch(`${UNIVERSAL_API}/cities/${city}`, options);
  }

}

module.exports = ReservesService;
