class UsersService {
  users = [
    {
      id: 1,
      fullName: 'admin',
      birthday: '',
      gender: 'Masculino',
      documentType: 'Cédula',
      document: '12312456456',
      phone: '13113453',
      email: 'admin@admin.com',
      password: '123456789',
      contactPhone: '6565656',
      contactName: '35454566',
      active: true,
    }
  ];

  async find() {
    return this.users;
  }

  async findOne(id) {
    return this.users.find(user => user.id === Number(id));
  }

  async create() {
    this.users.push({
      ...user,
      active: true,
      password: '123456789',
      id: this.users.length + 1
    });

    return this.users[this.users.length - 1];
  }
}

module.exports = UsersService;
