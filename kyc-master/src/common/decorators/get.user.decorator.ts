// import { createParamDecorator } from '@nestjs/common';
// import { UserResponseJWTDto } from '../../modules/auth/modules/auth/auth/dtos/set-role.dto';


// export const GetUser = createParamDecorator((data, request) : UserResponseJWTDto => {
//   const req  = request.switchToHttp().getRequest();
  
//   const response : UserResponseJWTDto = {
//     id_User : req.user.id_User,
//   }
//   if (req.user.roles) {
//     response.roles = req.user.roles;
//   }

//   return response
// });
