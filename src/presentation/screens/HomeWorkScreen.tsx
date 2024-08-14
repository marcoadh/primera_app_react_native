import { StyleSheet, View } from "react-native"

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.greenBox]} />
    </View>
  )
}

// Ejercicio 1
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'space-between'
//     // Todo: Tarea
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white'
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6'
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//     flex: 1
//   },
//   greenBox: {
//     backgroundColor: '#28C4D9'
//   }
// })

// Ejercicio 2
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center'
//     // Todo: Tarea
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white'
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6'
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B'
//   },
//   greenBox: {
//     backgroundColor: '#28C4D9',
//     width: '100%'
//   }
// })

// Ejercicio 3
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center'
//     // Todo: Tarea
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white'
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//     alignSelf: 'flex-end'
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B'
//   },
//   greenBox: {
//     backgroundColor: '#28C4D9',
//     alignSelf: 'center'
//   }
// })

// Ejercicio 3
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'space-between'
//     // Todo: Tarea
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white'
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//     alignSelf: 'flex-end'
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//     alignSelf: 'center'
//   },
//   greenBox: {
//     backgroundColor: '#28C4D9',
//   }
// })

// Ejercicio 4
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//     // Todo: Tarea
//   },
//   box: {
//     width: 100,
//     height: '100%',
//     borderWidth: 10,
//     borderColor: 'white'
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6'
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B'
//   },
//   greenBox: {
//     backgroundColor: '#28C4D9'
//   }
// })

// Ejercicio 5
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'row',
    justifyContent: 'space-between'
    // Todo: Tarea
  },
  box: {
    width: 100,
    height: '100%',
    borderWidth: 10,
    borderColor: 'white'
  },
  purpleBox: {
    backgroundColor: '#5856D6'
  },
  orangeBox: {
    backgroundColor: '#F0A23B'
  },
  greenBox: {
    backgroundColor: '#28C4D9'
  }
})