import {LoginResponse} from '~/model/response/LoginResponse';

export type UserStateType = {
  memberProfile: LoginResponse | null;
  isLogin: Boolean | null;
  userName: string | '';
  password: string | '';
};
