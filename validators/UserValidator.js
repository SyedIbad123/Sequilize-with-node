const Joi = require("joi");
const BaseValidator = require("./BaseValidator.js");

class UserValidator extends BaseValidator {
  // constructor() {
  //   const schema = Joi.object().keys({
  //     // ...schema definition
  //   });
  //   super(schema);
  // }

  validateCreateUser = (user) => {
    const schema = Joi.object().keys({
      name: Joi.string().required().label("User Name"),
      email: Joi.string().required().label("email"),
      password: Joi.string().required().label("password"),
      isNewUser: Joi.boolean().required().label("isNewUser"),
      isDeleted: Joi.boolean().optional(),
    });

    return this.validate(schema, user);
  };

  validateUpdateUser = (user) => {
    const schema = Joi.object().keys({
      name: Joi.string().optional().label("Permission Name"),
      module: Joi.string().optional().label("Module"),
      isDeleted: Joi.boolean().optional(),
    });

    return this.validate(schema, user);
  };
}

module.exports = new UserValidator();
