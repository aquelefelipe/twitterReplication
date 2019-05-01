import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import FeedScreen from './pages/feed'
import TrendsScreen from './pages/trends'
import DetailsScreen from './pages/tweetDetails'

const TabNavigator = createBottomTabNavigator({
    Feed:{
        screen: FeedScreen
    },
    Trends: {
        screen: TrendsScreen    
    }
})

const stackNavigator = createStackNavigator({
    TabNavigator,
    DetailsScreen
 },{
    defaultNavigationOptions: {
        title: 'Tweet'  
    }
 })


export default createAppContainer(stackNavigator)