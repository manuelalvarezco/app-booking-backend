const Reserve = require('../models/reserve');

class ReservesService {
  reserves = [];

  async create(body) {
    const reserve = new Reserve(body);
    return await reserve.save();
  }

  async find() {
    const reserves = await Reserve.find();
    return reserves;
  }

  async findByUserId(userId) {
    const reserves = await Reserve.find({ userId: { $eq: userId } });
    return reserves;
  }
}

module.exports = ReservesService;
