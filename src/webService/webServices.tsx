import {AxiosError, AxiosResponse} from 'axios';

import axiosInstance from './axiosInstance';

export function login(userName: string, password: string) {
  return axiosInstance
    .post('users/login', {
      userName: userName,
      email: 'ajefri76108@gmail.com',
      password: password,
      name: 'jefri',
      userRole: 'admin',
    })
    .then((response: AxiosResponse) => {
      //TODO login api response logic
      if (response.status == 200) {
        return {response};
      } else {
        //TODO 404 global dialog
      }
    })
    .catch((error: AxiosError) => {
      //TODO login api response error
      return {error};
    });
}
//"userName": "root1",
//"password": "root",
