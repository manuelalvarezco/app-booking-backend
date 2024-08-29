const removeDuplicates = require('../utils/removeDuplicates')
const boom = require('@hapi/boom');

class HotelsService {
  hotels = [
    {
      id: 1,
      name: 'Stay Home',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.5,
      price: 200,
      active: true,
      image:
        'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Urban Retreat',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.8,
      price: 350,
      active: true,
      image:
        'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Beachside Bliss',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.7,
      price: 450,
      active: true,
      image:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Mountain Escape',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.9,
      price: 300,
      active: true,
      image:
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'City Lights Hotel',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.6,
      price: 275,
      active: true,
      image:
        'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      name: 'Luxury Suite',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.8,
      price: 500,
      active: true,
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 7,
      name: 'Cozy Corner',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.4,
      price: 220,
      active: true,
      image:
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 8,
      name: 'Ocean View Retreat',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.7,
      price: 350,
      active: true,
      image:
        'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 9,
      name: 'Historic Charm',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.6,
      price: 275,
      active: true,
      image:
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 10,
      name: 'Modern Oasis',
      city: 'Bogota',
      country: 'Colombia',
      state: 'Bogota',
      rating: 4.5,
      price: 290,
      active: true,
      image:
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  async create(hotel) {
    this.hotels.push({
      ...hotel,
      id: this.hotels.length + 1,
      rating: 4.5,
      active: true,
    });

    return this.hotels;
  }

  async find(query) {
    return query?.limit ? this.hotels.slice(0, query.limit) : this.hotels;
  }

  async findOne(id) {
    return this.hotels.find(hotel => hotel.id === Number(id));
  }

  async findHotelCities(query) {
    const cities = this.hotels.map((element) => element.city);
    return removeDuplicates(cities);
  }

  async update(id, hotel) {
    const indexHotel = this.hotels.findIndex(hotel => hotel.id === Number(id));
    if (indexHotel >= 0) {
      this.hotels[indexHotel] = { ...hotel, id:  Number(id), active: true };
    } else {
      throw boom.notFound('Hotel no encontrado');
    }
    return this.hotels;
  }

  async updateStatus(id, hotel) {
    const indexHotel = this.hotels.findIndex(hotel => hotel.id === Number(id));
    if (indexHotel >= 0) {
      this.hotels[indexHotel] = { ...hotel, id:  Number(id), active: !hotel.active };
    } else {
      throw boom.notFound('Hotel no encontrado');
    }
    return this.hotels
  }
}

module.exports = HotelsService;
