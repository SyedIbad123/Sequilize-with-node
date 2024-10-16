const BaseRepository = require("./BaseRepo.js");
const db = require("../models/index.js");

class PermissionRepo extends BaseRepository {
  model;
  constructor() {
    super(db.Permission);
    this.model = db.Permission;
  }

  async createPermission(permission) {
    return this.create(permission);
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

module.exports = new PermissionRepo();
