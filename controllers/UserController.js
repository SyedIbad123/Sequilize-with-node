// const { Op } = require("sequelize");
const UserRepo = require("../repos/UserRepo.js");
const { validateCreateUser } = require("../validators/UserValidator.js");
const BaseController = require("./BaseController.js");

class UserController extends BaseController {
  constructor() {
    super();
  }

  createUser = async (req, res) => {
    const validationResult = validateCreateUser(req.body);

    if (!validationResult.status) {
      return this.validationErrorResponse(res, validationResult.message);
    }

    const { profile, ...userData } = req.body;

    const user = await UserRepo.createUserAndProfile({
      ...userData,
      profile: { ...profile },
    });

    return this.successResponse(res, user, "User created successfully");
  };
}

module.exports = new UserController();
