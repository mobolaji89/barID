import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { drinkUpdate, drinkCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import DrinkForm from './DrinkForm';

class DrinkCreate extends Component {
  onButtonPress() {
    const { currentUser } = firebase.auth();
    const userID = currentUser.uid;
    const code = Math.floor(Math.random() * 400) + 1;
    const { name, price, status, amount } = this.props;

    var array = ['https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?dpr=1&auto=format&fit=crop&w=1500&h=947&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1481833761820-0509d3217039?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1482112048165-dd23f81c367d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?dpr=1&auto=format&fit=crop&w=1500&h=991&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1415638485326-f4a83d547c07?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1421622548261-c45bfe178854?dpr=1&auto=format&fit=crop&w=1500&h=1002&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1421622548261-c45bfe178854?dpr=1&auto=format&fit=crop&w=1500&h=1002&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1436911540429-4a6e2c0f1601?dpr=1&auto=format&fit=crop&w=1500&h=1041&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?dpr=1&auto=format&fit=crop&w=1500&h=2254&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1444728399417-08d2aa39e6f4?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='];
    const image_url = array[(Math.floor(Math.random() * 9) + 1)];

    this.props.drinkCreate({ name: name || 'Gin | Tonic', price: '$10.00', status: 'IN-PREPARATION', amount: amount || '0', userID, code, image_url });
  }

  render() {
    return (
      <Card>
        <DrinkForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Purchase
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, price, status, amount, userID, image_url, code } = state.drinkForm;

  return { name, price, status, amount, userID, image_url, code };
};

export default connect(mapStateToProps, {
  drinkUpdate, drinkCreate
})(DrinkCreate);
