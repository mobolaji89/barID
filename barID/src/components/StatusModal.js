import React, { Component } from 'react';
import { Text } from 'react-native';

import { Card, CardSection, Button, Confirm } from './common';

class StatusModal extends Component {
  state = { showModal: false };

  onAccept() {
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.titleText}>
          Your Total Tab Amount: $0.00
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Close Tab
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
    );
  }
}

const styles = {
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
};

export default (StatusModal);
