const Hotel = require('../models/hotel');

class HotelsService {

  async create(body) {
    const hotel = new Hotel(body);
    return await hotel.save();
  }

  async find(query) {
    return query?.limit ? await Hotel.find().limit(query.limit) : await Hotel.find();
  }

  async findOne(_id) {
    return await Hotel.findOne({ _id });
  }

  async findHotelCities(query) {
    const hotels = await this.find();
    const cities = hotels.map((element) => element.city);
    return removeDuplicates(cities);
  }

  async update(_id, hotel) {
    return await Hotel.findByIdAndUpdate(_id, hotel);
  }

  async updateStatus(_id, hotel) {
    const status = !hotel.active;
    return await Hotel.findByIdAndUpdate(_id,{ active: status });
  }
}

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

module.exports = HotelsService;
