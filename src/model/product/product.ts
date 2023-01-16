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
