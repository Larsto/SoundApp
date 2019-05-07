import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Button } from 'react-native'
import ListItem from './components/ListItem'
import { Header } from './components/common/'
import * as actions from './actions';

class SoundTypeList extends Component {

    renderItem = (sounds) => {
        return <ListItem sounds={sounds} navigation={this.props.navigation}/>
             
    }
    
    render() {
        return(
            <View>
                <Header headerText={"Sounds"}/>
                <FlatList
                data={this.props.soundTypes}
                renderItem={this.renderItem}
                keyExtractor={(sounds) => sounds.id}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { soundTypes: state.soundTypes };
}


export default connect(mapStateToProps, actions) (SoundTypeList);