import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Alert } from 'react-native';
import { CardSection } from './common'
import Sound from 'react-native-sound';

class ListItem extends Component {

  playSound = (sounds) => {
    const sound = new Sound(sounds, null, (error) => {
  if (error) {
    Alert.alert(error.message)
  }
  // play when loaded
  sound.play(() => {
    sound.release();
  });
});
  }
  render () 
        {
            return (
            <CardSection>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{this.props.sounds.item.title}</Text>
                    <TouchableHighlight style={styles.button} onPress={() => this.playSound(this.props.sounds.item.url)}>
          <Text style={styles.textStyle2}>Play</Text>
          </TouchableHighlight>
                </View>
            </CardSection>
            )
        }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 24,
        textAlign: 'center',
      },
      textStyle2: {
        fontSize: 20,
        textAlign: 'center',
      },
      button: {
        backgroundColor: 'rgba(220,220,220,1)',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(80,80,80,0.5)',
        overflow: 'hidden',
        padding: 7,
      },
  }

export default ListItem;