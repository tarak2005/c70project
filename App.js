import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import WriteStoryScreen from './Screens/WriteStoryScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen';

export default class App extends React.Component {
    render() {
        return (

            <AppContainer />

        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Write: {Screens: WriteStoryScreen},
    Read: {Screens: ReadStoryScreen},
  },
  
  { defaultNavigationOptions : ({navigation})=>({
  
  tabBarIcon:()=>{
  const routeName =navigation.state.routeName
  
  if(routeName='Transaction'){
    return(
  <Image source={require("write.png")} style={{width:40, height:40}} />
  )
  
  }
  else if(routeName === "Search")
  { return( <Image source={require("read.png")}
   style={{width:40, height:40}} />)
    
  }
  }
  })}
  
  );
  
  
  
  const AppContainer =  createAppContainer(TabNavigator);