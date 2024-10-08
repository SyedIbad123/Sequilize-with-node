const BaseRepository = require("./BaseRepo.js");
const db = require("../models/index.js");

class UserRepo extends BaseRepository {
  model;
  constructor() {
    super(db.Permission);
    this.model = db.User;
  }

  async createUser(user) {
    return this.create(user);
  }

  async getPermissions(searchQuery = {}) {
    return this.findAll(searchQuery);
  }

  async updatePermission(permission, id) {
    // R&D on find by id and update
    return this.update(permission, { id }), this.findById(id);
  }

  async findById(id) {
    return this.findOne({ id });
  }

  async deletePermission(id, type = "soft") {
    return this.delete(id, type);
  }

  async countPermission(query = {}) {
    return this.count(query);
  }

  // async findByIdWithInclude(searchQuery) {
  //   return this.findOneWithInclude(searchQuery);
  // }

  async isPermissionExists(id) {
    return this.count({
      id,
    });
  }
}

module.exports = new UserRepo();
