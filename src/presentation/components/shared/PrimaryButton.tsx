import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
  text: string
  onPress?: () => void
  onLongPress?: () => void
}

export const PrimaryButton = ({ text, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
    >
      <Text style={{ color: '#fff', fontSize: 20 }}>{text}</Text>
    </Pressable >
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 5
  },
  buttonPressed: {
    backgroundColor: '#4746AB'
  }
})