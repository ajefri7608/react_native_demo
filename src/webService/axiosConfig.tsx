import {baseUrl} from './endPoint';
const header = {
  'X-Custom-Header': 'foobar',
  responseEncoding: 'utf8',
};
export const axiosConfig = {
  baseURL: baseUrl,
  timeout: 10000,
  headers: header,
  responseType: 'json',
  //httpsAgent: new https.Agent({ keepAlive: true }),
};
