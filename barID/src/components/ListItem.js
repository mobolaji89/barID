import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.drinkEdit({ drink: this.props.drink });
  }

  render() {
    const { name, image_url } = this.props.drink;
    console.log(this.props)
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <View style={styles.imageContainerStyle}>
              <Image
                style={styles.imageStyle}
                source={{uri: image_url}}
              />
            </View>
            <View style={styles.textContainerStyle}>
              <Text style={styles.titleStyle}>
                {name}
              </Text>
              <Text style={styles.statusCodeStyle}>
                Status: Pending
              </Text>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontFamily: 'Geeza Pro',
    fontSize: 22,
    paddingLeft: 15
  },
  imageStyle: {
    width: 75,
    height: 75
  },
  textContainerStyle: {
    flex: 1,
    alignItems:'center',
    paddingRight: 15,
  },
  imageContainerStyle: {
    paddingLeft: 9
  },
  statusCodeStyle: {
    color: 'red',
    fontFamily: 'Geeza Pro',
    fontSize: 16,
    paddingLeft: 15
  }
};

export default ListItem;
