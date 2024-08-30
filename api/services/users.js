const User = require('../models/user');
class UsersService {

  async find() {
    const users = await User.find();
    return users;
  }

  async findOne(_id) {
    const user = await User.findOne({ _id });
    return user;
  }

  async create(body) {
    const user = new User(body);
    return await user.save();
  }
}

module.exports = UsersService;
