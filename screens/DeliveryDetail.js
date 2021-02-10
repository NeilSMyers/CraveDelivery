import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const DeliveryDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {date, early, earlyInTime, lateInTime, late} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: date,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today we had...</Text>
      <Text style={styles.text}>{early} early</Text>
      <Text style={styles.text}>{earlyInTime} early within the timeframe</Text>
      <Text style={styles.text}>{lateInTime} late within the timeframe</Text>
      <Text style={styles.text}>{late} late</Text>
      <Text style={styles.text}>...deliveries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 18,
    margin: 10,
    color: 'white',
  },
});

export default DeliveryDetail;
