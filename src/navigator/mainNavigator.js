import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial194363Navigator from '../features/Tutorial194363/navigator';
import NotificationList194335Navigator from '../features/NotificationList194335/navigator';
import Settings194334Navigator from '../features/Settings194334/navigator';
import Settings194326Navigator from '../features/Settings194326/navigator';
import UserProfile194324Navigator from '../features/UserProfile194324/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial194363: { screen: Tutorial194363Navigator },
NotificationList194335: { screen: NotificationList194335Navigator },
Settings194334: { screen: Settings194334Navigator },
Settings194326: { screen: Settings194326Navigator },
UserProfile194324: { screen: UserProfile194324Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
