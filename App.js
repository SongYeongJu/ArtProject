import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/screen/Login';
import Join from './src/screen/Join';
import Main from './src/screen/Main';
import Setting from './src/screen/Setting';
import Splash from './src/screen/Splash';
import Loading from './src/screen/Loading';
import ItemInfo from './src/screen/ItemInfo';
import UserListView from './src/screen/UserListView';

const AppNavigator = createStackNavigator(
  {
    Splashs: Splash,
    Logins: Login,
    Joins: Join,
    Mains : Main, 
    Settings : Setting, 
    Loadings: Loading,
    ItemInfos : ItemInfo,
    UserListViews : UserListView,
  },
  { 
    initialRouteName: 'Mains',
    headerMode : 'none',
  }
);
export default createAppContainer(AppNavigator);

