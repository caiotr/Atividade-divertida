import { React, Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from '../styles/Styles.ts'


export class A extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela A</Text>

      </View>
    );
  }
}

export default A;