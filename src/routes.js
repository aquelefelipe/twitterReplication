import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import FeedScreen from './pages/feed'
import TrendsScreen from './pages/trends'

const TabNavigator = createBottomTabNavigator({
    Feed:{
        screen: FeedScreen,
    },
    Trends: {
        screen: TrendsScreen,
        
    }
})

const stackNavigator = createStackNavigator({
    TabNavigator
 })


export default createAppContainer(stackNavigator)