import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Navigator from './Navigator';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{flex:1}}>
                <Navigator/>
            </View>
        </Provider>
    )
}

export default App;