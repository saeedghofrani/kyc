import { RoleEnum } from "../enums/role.enum";


export default {
  section: 'role',
  values: {
    "ROLE_NOT_EXISTS": { key: 100000, value: RoleEnum.ROLE_NOT_EXISTS  },
    "DEFAULT_ROLE_ALREADY_EXISTS": { key: 100002, value: RoleEnum.DEFAULT_ROLE_ALREADY_EXISTS  },
    "SLUG_ROLE_ALREADY_EXISTS": { key: 100003, value: RoleEnum.SLUG_ROLE_ALREADY_EXISTS  },

  },
};