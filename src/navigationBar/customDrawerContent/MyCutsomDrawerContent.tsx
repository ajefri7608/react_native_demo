import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export const MyCustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Help" onPress={() => console.log('drawer on press')} />
    </DrawerContentScrollView>
  );
};
