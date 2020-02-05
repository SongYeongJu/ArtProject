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
import SettingListView from './src/screen/SettingListView';
import PersonInfo from './src/screen/PersonInfo';
import notice from './src/screen/notice';
import point from './src/screen/point';
import help from './src/screen/help';
import buy from './src/screen/Buy';
import StartScreen from './src/screen/StartScreen';

const AppNavigator = createStackNavigator(
  {
    Splashs: Splash,
    Logins: Login,
    Joins: Join,
    Mains : Main, 
    Settings : Setting, 
    ItemInfos : ItemInfo,
    UserListViews : UserListView,
    SettingListViews : SettingListView,
    PersonInfos : PersonInfo,
    notices : notice,
    points : point,
    helps : help,
    buys : buy,
    StartScreens : StartScreen,
  },
  { 
    initialRouteName: 'Mains',
    headerMode : 'none',
  }
);
export default createAppContainer(AppNavigator);
