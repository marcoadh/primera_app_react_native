import { StyleSheet, Text, View } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
      <View style={styles.purpleBox}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    padding: 5,
    borderWidth: 10
  },
  purpleBox: {
    height: 30,
    margin: 20,
    backgroundColor: 'purple'
  }
})