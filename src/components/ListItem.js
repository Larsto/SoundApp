import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';


class ListItem extends Component {
    buttonPress(type) {
        this.props.navigation.navigate('Sounds')
        this.props.selectSoundType(type)
    }

    render () {
            return (
                <TouchableHighlight onPress={()=> this.buttonPress(this.props.sounds.item.title)}>
                <CardSection>
                    <Text style={styles.textStyle}>{this.props.sounds.item.title}</Text>
                </CardSection>
                </TouchableHighlight>
            )
        }
}

const styles = {
    textStyle: {
        fontSize: 24
      }
}

export default connect(null, actions)(ListItem);