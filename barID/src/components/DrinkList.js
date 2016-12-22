import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import { Card, CardSection, Button, Confirm } from './common';
import { drinksFetch } from '../actions';
import ListItem from './ListItem';

class DrinkList extends Component {
  state = { showModal: false };

  onAccept() {
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }
  
  componentWillMount() {
    this.props.drinksFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    // console.log(nextProps);
    this.createDataSource(nextProps);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const drinks = this.props.drinks;
  //   const drinkCountArray = drinks.map((drink) => drink.amount);
  //   const drinkPriceArray = drinks.map((drink) => drink.price);
  //   console.log(drinkCountArray);
  //   console.log(drinkPriceArray);

  //   for (let i = 0; i < drinkCountArray.length; i++) {
  //     total += drinkCountArray[i] * drinkPriceArray[i];
  //   }
  //   return total;
  // }

  createDataSource({ drinks }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(drinks);
  }

  renderRow(drink) {
    return <ListItem drink={drink} />;
  }

  render() {
    const drinks = this.props.drinks;
    const drinkCountArray = drinks.map((drink) => drink.amount);
    const drinkPriceArray = drinks.map((drink) => drink.price);
    
    let total = 0;

    for (let i = 0; i < drinkCountArray.length; i++) {
      total += drinkCountArray[i] * drinkPriceArray[i];
    }
    console.log(total);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        renderFooter={() =>
          <Card>
            <CardSection>
              <Button onPress={() => this.setState({ showModal: !this.state.showModal })}> 
              Total: ${total}.00
              </Button>
            </CardSection>

            <Confirm
              visible={this.state.showModal}
              onAccept={this.onAccept.bind(this)}
              onDecline={this.onDecline.bind(this)}
            >
              Are you sure you want to close your tab?
            </Confirm>
          </Card> 
          
        }
      />
    );
  }
}

const mapStateToProps = state => {
  const drinks = _.map(state.drinks, (val, uid) => {
    return { ...val, uid };
  });

  return { drinks };
};

export default connect(mapStateToProps, { drinksFetch })(DrinkList);
