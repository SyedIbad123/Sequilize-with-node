const Joi = require("joi");
const BaseValidator = require("./BaseValidator.js");

class UserValidator extends BaseValidator {
  // constructor() {
  //   const schema = Joi.object().keys({
  //     // ...schema definition
  //   });
  //   super(schema);
  // }

  validateCreateUserProfile = (userprofile) => {
    const schema = Joi.object().keys({
      contactNo: Joi.string().required().label("Contact No"),
      cnic: Joi.string().required().label("cnic"),
      city: Joi.string().required().label("city"),
      branch: Joi.string().required().label("branch"),
      userId: Joi.number().required().label("userId"),
      isDeleted: Joi.boolean().optional(),
    });

    return this.validate(schema, userprofile);
  };

  validateUpdateUserProfile = (userprofile) => {
    const schema = Joi.object().keys({
      name: Joi.string().optional().label("Permission Name"),
      module: Joi.string().optional().label("Module"),
      isDeleted: Joi.boolean().optional(),
    });

    return this.validate(schema, userprofile);
  };
}

module.exports = new UserValidator();
