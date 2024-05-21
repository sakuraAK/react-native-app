import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function GuessLogItem({ roundNumber, guess }) {
  return (
   {/*todo: use View and Text component with current props and the styles object below to get the desired look*/}
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans'
  }
});
