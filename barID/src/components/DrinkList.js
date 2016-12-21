import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { drinksFetch } from '../actions';
import ListItem from './ListItem';

class DrinkList extends Component {
  componentWillMount() {
    this.props.drinksFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

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
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
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
