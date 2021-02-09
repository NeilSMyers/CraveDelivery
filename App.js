import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Deliveries from './screens/Deliveries';
import DeliveryDetail from './screens/DeliveryDetail';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Deliveries" component={Deliveries} />
        <Screen name="DeliveryDetail" component={DeliveryDetail} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
