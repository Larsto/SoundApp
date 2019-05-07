import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableHighlight, Text } from 'react-native';

class SoundPlayList extends Component {
    
    renderItem = (sounds) => {
        if (sounds.item.type === this.props.selection){
        return <SoundItem sounds={sounds}/>
        }
    }
    
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center',}}>
            <Text style={styles.mainText}>Siitä sulle sound appi! HOMO! ;D</Text>
                <TouchableHighlight style={styles.button} onPress={()=> this.props.navigation.navigate('Main')}><Text style={styles.textStyle}>Aloita</Text></TouchableHighlight>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 24,
        textAlign: 'center',
      },
      mainText: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 50
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