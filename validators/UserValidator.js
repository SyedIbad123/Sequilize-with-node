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
      profile: Joi.object()
        .keys({
          contactNo: Joi.string().required().label("Contact Number"),
          cnic: Joi.string().required().label("CNIC"),
          city: Joi.string().required().label("City"),
          branch: Joi.string().required().label("Branch"),
          isDeleted: Joi.boolean().optional(),
        })
        .required()
        .label("Profile"),
    });

    return this.validate(schema, user);
  };

  validateUpdateUser = (user) => {
    const schema = Joi.object().keys({
      name: Joi.string().optional().label("User Name"),
      email: Joi.string().optional().label("email"),
      password: Joi.string().optional().label("password"),
      isNewUser: Joi.boolean().optional().label("isNewUser"),
      isDeleted: Joi.boolean().optional(),
    });

    return this.validate(schema, user);
  };
}

module.exports = new UserValidator();
