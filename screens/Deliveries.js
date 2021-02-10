import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import data from '../data';

const DeliveryItem = (item) => {
  const navigation = useNavigation();
  console.log(item);
  return (
    <TouchableOpacity
      style={styles.deliveryItem}
      onPress={() => navigation.navigate('DeliveryDetail', item)}>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );
};

const Deliveries = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.date}
        renderItem={({item}) => <DeliveryItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  deliveryItem: {
    padding: 15,
  },
  date: {
    fontSize: 18,
    color: 'white',
  },
});

export default Deliveries;
