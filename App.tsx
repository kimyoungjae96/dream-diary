import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MyCalendar } from 'screens/MyCalendar'
import { MyPageScreen } from 'screens/MyPage'
import { FeedScreen } from 'screens/Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="MyCalendar" component={MyCalendar} />
        <Tab.Screen name="MyPage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
