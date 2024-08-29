require('dotenv').config();

class ReservesService {

  async getAccesstoken(reserve) {
    this.reserves.push({
      ...reserve,
      id: this.hotels.length + 1,
    });
    return this.reserves;
  }

  async find() {
    return this.reserves;
  }

  async findByUserId(userId) {
    return response.find(reserve => reserve.userId === Number(userId));
  }
}

module.exports = ReservesService;
