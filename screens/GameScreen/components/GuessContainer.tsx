import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../../../helpers";

const { secondary500 } = Colors;
interface GuessProps {
  currentGuess: number;
}

function GuessContainer({ currentGuess }: GuessProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{currentGuess}</Text>
    </View>
  );
}

export default GuessContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: secondary500,
    fontSize: 36,
  },
});
