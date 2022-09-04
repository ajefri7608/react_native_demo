import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginResponse} from '~/model/response/LoginResponse';
import {UserStateType} from '~/model/stateTypeDefine/UserStateType';

const initialState: UserStateType = {
  memberProfile: null,
  isLogin: null,
  userName: '',
  password: '',
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{userName: string; password: string}>,
    ) => {
      console.log('login processing');
      state.isLogin = !state.isLogin;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      console.log(action.payload);
      state.memberProfile = action.payload;
      state.isLogin = true;
      console.log('login success');
    },
    loginFail: state => {
      console.log('login fail');
    },
    userNameOnChange: (state, action) => {
      state.userName = action.payload;
    },
    passwordOnChange: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {login, userNameOnChange, passwordOnChange} = userSlice.actions;

export default userSlice.reducer;
