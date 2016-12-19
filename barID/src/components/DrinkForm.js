import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { drinkUpdate } from '../actions';
import { CardSection, Input } from './common';

class DrinkForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.drinkUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Price"
            placeholder="$10.00"
            value={this.props.price}
            onChangeText={value => this.props.drinkUpdate({ prop: 'price', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Status</Text>
          <Picker
            selectedValue={this.props.status}
            onValueChange={value => this.props.drinkUpdate({ prop: 'status', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Input
            label="Amount"
            placeholder="1"
            value={this.props.amount}
            onChangeText={value => this.props.drinkUpdate({ prop: 'amount', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, price, status, amount } = state.drinkForm;

  return { name, price, status, amount };
};

export default connect(mapStateToProps, { drinkUpdate })(DrinkForm);