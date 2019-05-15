import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/Avatar'
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar initials={'PL'} size={35} backgroundColor={'teal'} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
});
