const Romm = require('../models/romm');

class RommsService {

  async create(body) {
    const romm = new Romm(body);
    return await romm.save();
  }

  async find() {
    const romms = await Romm.find();
    return romms;
  }

  async findOne(_id) {
    return await Romm.findOne({ _id });
  }

  async findByHotelId(id) {
    return await Romm.find({ hotel: id, active: true });
  }

  async update(_id, romm) {
    return await Romm.findByIdAndUpdate(_id, romm);
  }

  async updateStatus(_id, romm) {
    const status = !romm.active;
    return await Romm.findByIdAndUpdate(_id,{ active: status });
  }
}

module.exports = RommsService;
