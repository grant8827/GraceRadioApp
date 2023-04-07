import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Home from './assets/Components/Home';
function App(): JSX.Element {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View>
          <Home />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },
});

export default App;
