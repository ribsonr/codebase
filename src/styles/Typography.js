import {StyleSheet, Platform} from 'react-native';
import Colors from './Colors';

const font = Platform.select({ios: 'System', android: 'Roboto'});
export default StyleSheet.create({
  //Type1
  bigTitle: {
    fontFamily: font,
    fontSize: 28,
    color: Colors.WHITE,
    fontWeight: 'bold',
    // textAlign: 'left',
  },
  //Type2
  title: {
    fontFamily: font,
    fontSize: 36,
    color: Colors.textGray,
    fontWeight: 'bold',
    // textAlign: 'left',
  },
  //Type3
  headerTitle: {
    fontFamily: font,
    fontSize: 17,
    color: Colors.WHITE,
    fontWeight: 'bold',
    // textAlign: 'left',
  },
});
