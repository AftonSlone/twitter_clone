import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from "class-validator";

@ValidatorConstraint({ name: "username", async: false })
export class ValidUsername implements ValidatorConstraintInterface {
  validate(username: string, args: ValidationArguments) {
    return /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/.test(
      username
    ); // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return "Username ($value) is not valid!";
  }
}

export function IsUsername(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ValidUsername,
    });
  };
}
