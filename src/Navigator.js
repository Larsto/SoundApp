import {createStackNavigator, createAppContainer} from 'react-navigation'
import SoundTypeList from './SoundTypeList'
import SoundPlayList from './SoundPlayList'
import Welcome from'./Welcome'

const AppNavigator = createStackNavigator({
    Welcome: { screen: Welcome },
    Main: { screen: SoundTypeList },
    Sounds: { screen: SoundPlayList },

},
    {
        initialRouteName: "Welcome",
        defaultNavigationOptions: {
            header: null
        },
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;