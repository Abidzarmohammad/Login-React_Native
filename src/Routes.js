import React, {Component} from 'react';
import {Router, Stack, Scene, Tabs, ActionConst} from 'react-native-router-flux';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Home from './pages/Home';

export default class Routes extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="login"
            component={Login}
            title="Login"
            initial={true}
            hideNavBar={true}
          />
          <Scene
            key="signup"
            component={Signup}
            title="Register"
            hideNavBar={true}
          />
          <Scene
            key="profile"
            component={Profile}
            title="Profile"
            hideNavBar={true}
          />
          <Scene
            key="main"
            component={Home}
            title="Home"
            hideNavBar={true}
            type={ActionConst.RESET}
          />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopColor: 'darkgrey',
    borderTopWidth: 1,
    opacity: 0.98,
    justifyContent: 'space-between',
  },
});
