class ReservesService {
  reserves = [];

  async create(reserve) {
    this.reserves.push({
      ...reserve,
      id: this.reserves.length + 1,
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
