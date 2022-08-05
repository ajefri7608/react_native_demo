import { createDrawerNavigator } from '@react-navigation/drawer';
import TestPage from '../view/page/TestPage';
const Drawer = createDrawerNavigator();

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TestPage" component={TestPage} />
    </Drawer.Navigator>
  );
}