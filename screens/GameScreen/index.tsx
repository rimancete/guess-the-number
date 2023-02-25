import { StyleSheet, View } from "react-native";
import { PageTitle } from "../../components";
import Controls from "./components/Controls";
import Logrounds from "./components/LogRounds";

function GameScreen() {
  return (
    <View style={styles.gameScreenContainer}>
      <PageTitle title="Opponent's Guess" />

      <Controls />

      <Logrounds />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
  },
});
