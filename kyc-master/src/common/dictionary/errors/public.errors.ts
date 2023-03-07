import { PublicEnum } from "../enums/public.enum";


export default {
  section: 'public',
  values: {
    "PUBLIC_ERROR": { key: 100000, value: PublicEnum.PUBLIC_ERROR  },
    "AXIOS_ERROR": { key: 100001, value: PublicEnum.AXIOS_ERROR  },
    "DATA_NOT_EXISTS": { key: 100002, value: PublicEnum.DATA_NOT_EXISTS  },
    "COLUMN_NOT_EXISTS": { key: 100003, value: PublicEnum.COLUMN_NOT_EXISTS  },
    "IP_ADDRESS_ERROR": { key: 100004, value: PublicEnum.IP_ADDRESS_ERROR  },
    "TOO_MANY_REQUEST": { key: 100005, value: PublicEnum.TOO_MANY_REQUEST},
    "USER_NOT_EXISTS": { key: 100006, value: PublicEnum.USER_NOT_EXISTS},
    "UUID_NOT_MATCH": { key: 100007, value: PublicEnum.UUID_NOT_MATCH},

  },
};