import { useState } from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles"
import Icon from "react-native-vector-icons/Ionicons"
import { FAB } from "react-native-paper"

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0)

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <Text>Hola</Text>
      <FAB
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={globalStyles.fab}
        icon="add-outline"
      />
    </View>
  )
}
