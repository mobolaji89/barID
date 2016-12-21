import React from 'react';
import { Scene, Router, Actions, Modal } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StatusModal from './components/StatusModal';
import DrinkList from './components/DrinkList';
import DrinkCreate from './components/DrinkCreate';
import DrinkEdit from './components/DrinkEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene
          onLeft={() => Actions.statusModal()}
          leftTitle="Total"
          onRight={() => Actions.drinkCreate()}
          rightTitle="Add"
          key="drinkList"
          component={DrinkList}
          title="Tab"
          initial
        />
        <Scene key="statusModal" component={StatusModal} />
        <Scene key="drinkCreate" component={DrinkCreate} title="Create Drink" />
        <Scene key="drinkEdit" component={DrinkEdit} title="Edit Drink" />
      </Scene>

    </Router>
  );
};

export default RouterComponent;

// Order of List matters- can also use the initial function in scene