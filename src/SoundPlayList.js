import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, TouchableHighlight, Text } from 'react-native';
import SoundItem from './components/SoundItem';
import { Header } from './components/common/';

class SoundPlayList extends Component {
    
    renderItem = (sounds) => {
        if (sounds.item.type === this.props.selection){
        return <SoundItem sounds={sounds}/>
        }
    }
    
    render() {
        return(
            <View style={{flex: 1}}>
                <Header headerText={this.props.selection}/>
            <FlatList 
                data={this.props.sounds}
                renderItem={this.renderItem}
                keyExtractor={(sounds) => sounds.id}
            />
                <TouchableHighlight style={styles.button} onPress={()=> this.props.navigation.goBack()}><Text style={styles.textStyle}>Back</Text></TouchableHighlight>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 24,
        textAlign: 'center',
      },
      button: {
        justifyContent: 'center',
        backgroundColor: 'rgba(220,220,220,1)',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(80,80,80,0.5)',
        overflow: 'hidden',
        padding: 7,
        height: 70,
      },
  }

const mapStateToProps = state => {
    console.log(state);
    return  { sounds: state.sounds,
              selection: state.selectedType
            };
}


export default connect(mapStateToProps)(SoundPlayList);