import { StyleSheet, Text, View } from "react-native";

function GameOverScreen() {
  return (
    <View style={styles.gameOverScreenContainer}>
      <Text>Game Over screen</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverScreenContainer: {
    flex: 1,
    padding: 24,
  },
});
