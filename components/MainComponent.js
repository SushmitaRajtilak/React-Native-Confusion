import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home  from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import {View,Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';



const MenuNavigator=createStackNavigator({
  Menu:{screen:Menu},
  Dishdetail:{screen:Dishdetail}
},{
  intitialRouteName: 'Menu',
  navigationOptions:{
      headerStyle:{
          backgroundColor:'#512DA8'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
          color: '#fff'
      }
  }
});

const HomeNavigator=createStackNavigator({
  Home:{screen:Home},
  
},{
  
  navigationOptions:{
      headerStyle:{
          backgroundColor:'#512DA8'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
          color: '#fff'
      }
  }
});


const ContactNavigator=createStackNavigator({
  Contact:{screen:Contact},
  
},{
  
  navigationOptions:{
      headerStyle:{
          backgroundColor:'#512DA8'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
          color: '#fff'
      }
  }
});

const AboutNavigator=createStackNavigator({
  About:{screen:About},
  
},{
  
  navigationOptions:{
      headerStyle:{
          backgroundColor:'#512DA8'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
          color: '#fff'
      }
  }
});


const MainNavigator=createDrawerNavigator({
  Home:{
      screen:HomeNavigator,
      navigationOptions:{
          title:'Home',
          drawerLabel:'Home'
      }
  },
  Menu:{
      screen:MenuNavigator,
      navigationOptions:{
          title:'Menu',
          drawerLabel:'Menu'
      }
  },
  Contact:{
      screen:ContactNavigator,
      navigationOptions:{
          title:'Contact Us',
          drawerLabel:'Contact Us'
      }
  },
  About:{
      screen:AboutNavigator,
      navigationOptions:{
          title:'About Us',
          drawerLabel:'About Us'
      }
  }
},{
  drawerBackGroundColor:'#D1C4E9'
});
    
 
class Main extends Component {
  

  render() {
 
    return (
        <View style ={{flex:1, paddingTop:Platform.OS==='ios'?0 :Expo.Constants.statusBarHeight}}>
           <MainNavigator/>
        </View>
    );
  }
}
  
export default Main;