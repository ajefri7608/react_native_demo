import {ApiMsg} from './ApiMsg';

export type GernalResponse<T> = {
  apiMsg: ApiMsg;
  data: T;
};
