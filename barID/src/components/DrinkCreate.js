import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drinkUpdate, drinkCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import DrinkForm from './DrinkForm';

class DrinkCreate extends Component {
  onButtonPress() {
    const { name, price, status, amount } = this.props;

    this.props.drinkCreate({ name, price, status: status || 'Being Prepared', amount: amount || 'Zero Balance' });
  }

  render() {
    return (
      <Card>
        <DrinkForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, price, status, amount } = state.drinkForm;

  return { name, price, status, amount };
};

export default connect(mapStateToProps, {
  drinkUpdate, drinkCreate
})(DrinkCreate);