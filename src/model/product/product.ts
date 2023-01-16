import {ImageRequireSource} from 'react-native';
export type CategoryIconItem = {
  name: string;
  itemName: string;
  icon: ImageRequireSource;
};

export type ProductFilterOptions = {
  dropDownListItem?: string;
  checkBoxState?: boolean;
  rating?: number;
};

export interface ProductDetailResponse {
  apiMsg: ApiMsg;
  data: Daum[];
}

export interface ApiMsg {
  rspCode: number;
  rspTitle: string;
  rspMsg: string;
}

export interface Daum {
  id: number;
  name: string;
  price: number;
  brand: string;
  seatCount: number;
  engineSize: number;
  yearOfManufacture: string;
  establishedDate: number;
  lastModifyDate: number;
  modifyBy: string;
  description: string;
  productStatus: string;
  numOfDoor: any;
  fuelType: any;
  used: any;
  images: Image[];
}

export interface Image {
  id: string;
  filePath: string;
  productId: string;
}
