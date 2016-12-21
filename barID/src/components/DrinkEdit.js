import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import DrinkForm from './DrinkForm';
import { drinkUpdate, drinkSave, drinkDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class DrinkEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.drink, (value, prop) => {
      this.props.drinkUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, price, status, amount, image_url } = this.props;

    this.props.drinkSave({ name, price, status, amount, uid: this.props.drink.uid, image_url });
  }

  onTextPress() {
    const { price, status } = this.props;

    Communications.text(price, `Your upcoming status is on ${status}`);
  }

  onAccept() {
    const { uid } = this.props.drink;

    this.props.drinkDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <DrinkForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Cancel Drink
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, price, status, amount, image_url } = state.drinkForm;

  return { name, price, status, amount, image_url };
};

export default connect(mapStateToProps, {
  drinkUpdate, drinkSave, drinkDelete
})(DrinkEdit);
