import { View, StyleSheet, Text } from "react-native";
const AppBar = () => {
  return (
    <View style={styles.appBarContainer}>
      <Text style={styles.appBarText}>Project Pokedex</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  appBarContainer:{
    flexDirection:'row',
    height:60
  },
  appBarText:{
    fontSize:24,
    textAlign: 'center'
  }
})

export default AppBar;
