import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import FeedScreen from './pages/feed'

const TabNavigator = createBottomTabNavigator({
    Feed:{
        screen: FeedScreen,
    }
})

const stackNavigator = createStackNavigator({
    TabNavigator
}, {
    defaultNavigationOptions: {
        title: "Feed"
    }
})

export default createAppContainer(stackNavigator)