import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafeWrapper = ({children}) => {
  return (
    <SafeAreaView edges={['left', 'bottom', 'right']} style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 15,
  },
});

export default SafeWrapper;
