const UserModel = require("../models/UserModels");

class UserService {
    async createUser(data) {
        const user = UserModel.create(data);
        return user;
    }

    async findUser(filter) {
        const user = UserModel.findOne(filter);
        return user;
    }
}

module.exports = new UserService();